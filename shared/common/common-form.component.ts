import { Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

import { Permission } from '../services/auth/auth.model';
import { CommonService } from './common.service';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBarComponent } from 'src/app/compartilhado/mat-snack-bar/mat-snack-bar.component';


export abstract class CommonFormComponent {

  protected snackBar: MatSnackBarComponent;
  protected authService: AuthService;
  protected formBuilder: FormBuilder;

  // objeto de formulario
  public form: FormGroup;
  // textos do layout
  public txt: any;
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

  constructor(injector:Injector, t?:[string,string]) {
    this.snackBar = injector.get(MatSnackBarComponent);
    this.authService = injector.get(AuthService);
    this.formBuilder = injector.get(FormBuilder);
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
   * funcao base para observar as mudan??as
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
  * carrega os dados do formul??rio
  * @param {CommonService} service instancia de CommonService
  * @param data vari??veis, opcionanis.
  */
  protected _loadData(service:CommonService, ...data): void {
    this.loading = true;
    service.loadData(...data)
      .subscribe(
        res => {
          // console.log(res);
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
          // se o erro for 404, n??o exibe mensagem
          if ( error.substr(0,3) !== '404' ) {
            // exibe mensagem de erro
            this.errorMsgLoading = "Um erro ocorreu " + error;
          }
          // flag de carregamento
          this.loading = false;
          // libera o form
          this.form.enable();
        }
      );
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
    this.snackBar.openSnackBar("Salvo com sucesso", 'Ok', 'green-snackbar');
    // fecha o dialog
    if (dialog && dialog !== null)
      dialog.close('saved');
  }

  /**
   * se o resultado da operacao der erro
   * @param {any} error resposta do servico
   */
  protected responseError(error:any): void {
    console.error(error);
    // exibe mensagem de erro
    this.errorMsgSent = 'Ocorreu um erro ' + ' ' + error;
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
