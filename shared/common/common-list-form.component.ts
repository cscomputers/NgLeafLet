/**
 * @author: Antonio Carlos L. Oliveira
 * @description: Classe que implementa tanto a List quanto a form, 
 * recomendada para telas que possuem tanto listagem quanto persistência de dados.
 */
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar, MatDialog } from "@angular/material";
import { AuthService } from "../services/auth/auth.service";
import { Subscription } from "rxjs";
import { Injector } from "@angular/core";
import { texts } from '../mockdata/texts';
import { Permission } from '../services/auth/auth.model';
import { removeAccents } from '../functions/remove-accents';
import { getKeyByValue } from '../functions/getKeyByValue';
import { numberToMoney } from '../functions/number-to-money';
import { CommonService } from './common.service';
import { ConfirmDialogComponent, confirmDialogModel } from '../components/confirm-dialog.component';

export abstract class CommonListFormComponent {

  protected snackBar: MatSnackBar;
  protected authService: AuthService;
  protected formBuilder: FormBuilder;
  protected dialog: MatDialog;

  // lista de dados
  public list: Array<any>;
  // filtro de lista
  public filter: string;
  // itens usados em alguns filtros
  public itemFilterList: Object;

  // textos do layout
  public txt;
  // objeto de formulario
  public form: FormGroup;
  // referencia para escutar as alteracoes no formulario
  protected formChanges: Subscription;
  // se enviou o formulario
  public sent: boolean = false;
  // se esta carregando/enviando
  public loading: boolean = false;
  // mensagem de erro de servico ao enviar
  public errorMsgSent: string;
  // mensagem de erro de servico ao carregar
  public errorMsgLoading: string;
  // registra um listenner de autenticacao
  protected authListenner: Subscription;
  // permissoes
  public permission: Permission;
  // lista de erros de validacao
  public formErrors = {};
  // lista de mensagens de erros de validacao
  public validationMessages = {};

  constructor(injector:Injector, t:[string,string]) {
    this.snackBar = injector.get(MatSnackBar);
    this.authService = injector.get(AuthService);
    this.formBuilder = injector.get(FormBuilder);
    this.dialog = injector.get(MatDialog);

    // carrega os textos
    this.txt = texts[t[0]][t[1]];
  }

  /**
   * carrega as permissoes da pagina
   * @param {number} id id da pagina
   */
  protected _loadPermissions(id:number): void {
    // pega as permissoes do usuario
    this.authService.getAuthUserPage(id)
      .subscribe( p => this.permission = p );
  }

  /**
   * registra os listenners
   * @param {DialogType} dialog referencia do dialog
   */
  protected registerLoginListenner(dialog):void {
    // registra o listenner
    this.authListenner = AuthService.wasAuthenticated.subscribe( au => {
      // fecha o dialog no logoff
      if (!au) dialog.close();
    } );
  }

  /**
   * cancela os listenners
   */
  protected cancelListenners(): void {
    if ( this.formChanges )
      this.formChanges.unsubscribe();

    if ( this.authListenner )
      this.authListenner.unsubscribe();
  }

  /**
   * funcao base para filtrar lista de dados
   * @return {Array<any>} lista de dados
   */
  abstract listData(): Array<any>;

  /**
   * filtra a lista de dados
   * @param  {any[]}    arr       lista de dados
   * @param  {string}   filter    filtro
   * @param  {string[]} fields    campos do filtro
   * @return {any[]}              lista de dados filtrados
   */
  protected _listData(arr:any[], filter:string, ...fields:string[]): any[] {
    if ( arr === undefined || arr === null || arr.length === 0 || filter === undefined || filter.trim() === '' )
      return arr;

    // passa um filtro
    return arr.filter( arrValue => {
      // lista de resultados por campo
      let objResult: Array<boolean> = [];
      // faz um loop nos campos
      fields.forEach( fieldValue => {
        // variavel para guardar o valor
        let value:any = null;
        // tipo de valor
        let type:string = null;
        // verifica se passou o tipo do campo
        if ( fieldValue.indexOf(':') != -1 ) {
          // separa campo e tipo
          [ fieldValue, type ] = fieldValue.split(':');
        }
        // pega o valor
        // verifica se passou um sub campo
        value = fieldValue.indexOf('.') != -1 ? eval('arrValue.' + fieldValue ) : arrValue[fieldValue];

        // trata pelo tipo
        // campo tipo data
        if ( type && type == 'date' && value != null ) {
          // verifica se o filtro esta no campo
          objResult.push( String( value['toLocaleDateString']() ).toLowerCase().indexOf(filter.toLowerCase()) >= 0 );
        }
        // campo tipo data e hora
        if ( type && type == 'datetime' && value != null ) {
          // verifica se o filtro esta no campo
          objResult.push( String(value['toLocaleString']()).slice(0,-3).toLowerCase().indexOf(filter.toLowerCase()) >= 0 );
        }
        // busca em um objeto
        if ( type && type == 'object' && this.itemFilterList ) {
          // retorna a chave pelo valor passado
          objResult.push( +value == getKeyByValue(this.itemFilterList, filter) );
        }
        // busa em um objeto onde o valor pode se repetir
        if ( type && type == 'objectRep' && this.itemFilterList ) {
          let arrC: Array<any> = [];
          // busta todas as chaves dos valores que condizem
          for ( let i in this.itemFilterList ) {
            if ( removeAccents( this.itemFilterList[i] ).toLowerCase().indexOf(removeAccents(filter).toLowerCase()) >= 0 )
              arrC.push(i);
          }
          // verifica se um dos resultados é o valor
          objResult.push( arrC.some( arrCValue => String(arrCValue) === String(value)) );
        }
        // campo tipo dinheiro
        if ( type && type == 'money' ) {
          // verifica se o filtro esta no campo
          objResult.push( String(numberToMoney(value)).toLowerCase().indexOf(filter.toLowerCase()) >= 0 );
        }
        // se nao passou um tipo
        if ( !type )
          objResult.push( removeAccents( String(value) ).toLowerCase().indexOf(removeAccents(filter).toLowerCase()) >= 0 );

      } );
      // retorna se encontrou alguma coisa
      return objResult.some( objResValue => objResValue === true );
    } );
  }

  /**
   * funcao base para carregar os dados
   */
  abstract buildForm(): void;

  /**
   * registra os listenners apos criar o form
   */
  protected _afterBuildForm(): void {
    // observa as mudancas
    this.formChanges = this.form.valueChanges.subscribe( data => this.onChangeValues() );
    // verifica as mudancas
    this.onChangeValues();
  }

  /**
   * funcao base para observar as mudanças
   */
  abstract onChangeValues(): void;

  /**
   * valida o form
   */
  protected _onChangeValues(): void {
    if (!this.form) {
      return;
    }
    if ( this.sent ) {
      for (let field in this.formErrors) {
        // limpa as mensagens de erros anteriores
        this.formErrors[field] = [];
        let control = this.form.get(field);

        // verifica novos erros
        if (control && !control.valid) {
          // let msg = this.validationMessages[field];
          for (let key in control.errors) {
            this.formErrors[field].push( this.validationMessages[field][key] );
          }
        }
      }
    }
  }

  /**
   * funcao base para carregar lista de dados
   */
  abstract loadData(...data): void;

  /**
  * carrega os dados do formulário
  * @param {CommonService} service instancia de CommonService
  * @param data variáveis, opcionanis.
  */
  protected _loadData(service:CommonService, ...data): void {
    this.loading = true;
    service.loadData(...data)
      .subscribe(
        res => {
          // carrega a lista
          this.list = res;
          // popula o formulario
          this.form.patchValue(res);
          // libera o formulario
          this.form.enable();
          // flag de carregamento
          this.loading = false;
          // verifica as mudancas
          this.onChangeValues();
        },
        error => {
          console.error(error);
          // se o erro for 404, não exibe mensagem
          if ( error.substr(0,3) !== '404' ) {
            // exibe mensagem de erro
            this.errorMsgLoading = this.txt.messages.error + error;
          }
          // flag de carregamento
          this.loading = false;
          // libera o form
          this.form.enable();
        }
      );
  }

  /**
   * exibe o formulario
   * @param {ComponentType}     component       instancia do componente de dialog
   * @param {any}               data            dados para enviar ao dialog
   * @param {string}            width           largura do dialog (com 'px' no valor)
   * @param {Function}          callbackSaved   funcao callback ao clicar em salvar
   * @param {Function}          callbackCancel  funcao callback ao clicar em cancelar
   * @param {Function|boolean}  callbackClose   funcao callback ao clicar fechar a janela clicando fora dela, se passado como true, executa a mesma funcao setada em callbackCancel
   */
  public _showForm(component, data: any = null, width?:string, callbackSaved?:Function, callbackCancel?:Function, callbackClose:Function|boolean = false): void {

    let dialogRef = this.dialog.open(component, {
      width: width || '600px',
      data: data
    });
    // escuta resposta do dialog
    let respDialog = dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      // se clicou em ok
      if (result && result == 'saved') {
        // se salvou, carrega novamente a lista
        this.loadData();
        // se passou uma funcao de callback
        if ( typeof callbackSaved == 'function' ) {
          callbackSaved();
        }
      }
      // se passou uma funcao de callback para executar ao clicar em cancelar
      if (result && result == 'cancel' && typeof callbackCancel == 'function' ) {
        callbackCancel();
      }
      // se passou uma funcao de callback para executar ao clicar fora da janela
      if ( !result && typeof callbackClose == 'function' ) {
        callbackClose();
      }
      // se no lugar de callbackClose passou true como valor, executa callbackCancel ao clicar fora da janela
      if ( !result && typeof callbackClose == 'boolean' && callbackClose && typeof callbackCancel == 'function' ) {
        callbackCancel();
      }
      // cancela escuta pela resposta
      respDialog.unsubscribe();
    });
  }

  /**
   * exclui um item
   * @param {any} id      id do item
   * @param {CommonService} service instancia do servico
   * @param {any} param1   param (parametro opcional, alguns endpoints da API precisam dele, fvr. não remover ou alterar) 
   * @param {any} param2   param (parametro opcional, alguns endpoints da API precisam dele, fvr. não remover ou alterar) 
   */
  protected _delete(id:any, service:CommonService, param1?:any, param2?:any, reload:boolean = true): void {

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new confirmDialogModel({
        title: this.txt.modal.title.delete || this.txt.modal.title,
        text: this.txt.modal.messages.delete || this.txt.modal.messages,
        buttonOk: this.txt.modal.buttons.ok,
        buttonCancel: this.txt.modal.buttons.cancel
      })
    });
    // // escuta resposta do dialog
    let respDialog = dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      // se clicou em ok
      if (result && result.choice == 'ok') {
        service.deleteData(id, ...param1, ...param2) // param -> (parametros adicionais, opcionais)
          .subscribe(
            res => {
              // exibe mensagem de sucesso
              this.snackBar.open(this.txt.messages.deleted, 'Ok', {duration: 2000});
              // se excluiu, e se reload sor true, carrega novamente a lista.
              if(reload) // algumas telas estão como false, não modificar.
                this.loadData();
            },
            error => {
              console.error(error);
              // se o erro for 404, não exibe mensagem
              if ( error.substr(0,3) !== '404' ) {
                // se for erro por item que não pode ser excluido
                if ( error.indexOf('ConstraintViolationException') !== -1 ) {
                  // exibe mensagem de erro por conter vinculos
                  this.dialog.open(ConfirmDialogComponent, {
                    width: '400px',
                    data: new confirmDialogModel({
                      text: this.txt.messages.notDeleted,
                      buttonCancel: this.txt.modal.buttons.close
                    })
                  });
                // se for erro 403, exibe a msg q retornou
                } else if ( error.substr(0,3) === '403' ) {
                  // remove codigos da msg e exibe ela
                  const msg = error.replace('403 - OK Forbidden ', '');
                  this.dialog.open(ConfirmDialogComponent, {
                    width: '400px',
                    data: new confirmDialogModel({
                      text: msg,
                      buttonCancel: this.txt.modal.buttons.close
                    })
                  });
                } else {
                  // exibe mensagem de erro
                  // this.errorMsgLoading = this.txt.messages.error + ' - ' + error;
                  // exibe mensagem de erro em uma janela
                  this.dialog.open(ConfirmDialogComponent, {
                    width: '400px',
                    data: new confirmDialogModel({
                      text: error,
                      buttonCancel: this.txt.modal.buttons.close
                    })
                  });
                }
              }
              if(reload)
                this.loadData();
            }
          );
      }
      // cancela escuta pela resposta
      respDialog.unsubscribe();
    });
  }

  /**
   * funcao base para enviar os dados
   * @param {any} v variaveis
   */
  abstract send(...v): void;

  /**
   * envia os dados
   * @param {any}        id          id dos dados (se passou, atualiza dados)
   * @param {CommonService} service     instancia de CommonService
   * @param {DialogType}    dialog      instancia de dialog
   * @param {any}           other       outros dados para serem enviados para o service
   */
  protected _send(id:any, service:CommonService, dialog?, ...other): void {
    // falg de envio
    this.sent = true;
    // verifica erros
    this.onChangeValues();
    if ( this.form.valid ) {
      this.loading = true;
      this.form.disable();

      // se passou um id, deve atualizar os dados
      if ( id !== null ) {
        service.editData(this.form.value, ...other)
          .subscribe(
            res => this.responseOk(res, dialog),
            error => this.responseError(error)
          );
      } else {
        service.sendData(this.form.value, ...other)
          .subscribe(
            res => this.responseOk(res, dialog),
            error => this.responseError(error)
          );
      }
    }
  }

  /**
   * se o resultado da operacao der certo
   * @param {any}        res    resposta do servico
   * @param {DialogType} dialog instancia de dialog
   */
  protected responseOk(res:any, dialog): void {
    // console.log('resposta post:', res);
    // flag de carregamento
    this.loading = false;
    // libera o formulario
    this.form.enable();
    // exibe mensagem de sucesso
    this.snackBar.open(this.txt.messages.saved, 'Ok', {duration: 2000});
    // fecha o dialog
    if (dialog)
      dialog.close('saved');
  }

  /**
   * se o resultado da operacao der erro
   * @param {any} error resposta do servico
   */
  protected responseError(error:any): void {
    console.error(error);
    // exibe mensagem de erro
    this.errorMsgSent = this.txt.messages.error + ' ' + error;
    // flag de carregamento
    this.loading = false;
    // libera o formulario
    this.form.enable();
    // esconde a mensagem de erros apos 5 seg
    setTimeout(() => this.errorMsgSent = null , 5000);
  }

  /**
   * funcao base para cancelar o dialog
   * @param {any} v variaveis
   */
  abstract cancel(...v): void;
}