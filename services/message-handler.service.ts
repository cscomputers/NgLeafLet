import { Injectable, Injector } from '@angular/core';
import { LoadingEventsService, ConfirmDialogComponent, confirmDialogModel } from '../shared';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSnackBarComponent } from '../compartilhado/mat-snack-bar/mat-snack-bar.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class MessageHandlerService {
  
  protected loadingEvent: string;
  protected respDialog: any;
  protected snackBar: MatSnackBarComponent;
  // se esta carregando/enviando
  public loading: boolean = false;
  // objeto de formulario
  public form: FormGroup;
  // mensagem de erro de servico ao enviar
  public errorMsgSent: string;
  // Mesnagens
  public msg_failed_write: string = '';
  public msg_unrealized: string = '';
  public msg_contact_admn: string = '';
  public msg_close: string = '';
  public msg_yes_delete: string = '';
  public msg_no_cancel: string = '';
  public msg_item_removed: string = '';
  public msg_ops_not_delete: string = '';
  public msg_not_delete: string = '';
  public msg_save_success: string = '';
  public msg_error_occurred: string = '';
  public msg_new: string = '';
  public msg_edit: string = '';
  public msg_action: string = '';
  public msg_deletion_title: string = '';
  public msg_deletion_text: string = '';
  public msg_status_changed: string = '';
  public msg_status_not_changed: string = '';

  constructor(injector:Injector, public dialog: MatDialog, private translate: TranslateService) { 
    this.snackBar = injector.get(MatSnackBarComponent);
    //Traduções
    this.translate.get([
      'Failed to write the data', 
      'Unrealized, code:', 
      'Please contact the system administrator.', 
      'Close', 
      'Yes, delete', 
      'No, cancel',
      'Item has removed.',
      'Ops!, You can not delete records that have links to other records',
      'Could not delete',
      'Save with success',
      'An error has occurred',
      'Edit',
      'New', 
      'Inclusion', 
      'Edition',
      'Action',
      'Delete',
      'Status changed has success.',
      'Confirm deletion',
      "Could not change status, fail!"
    ]).subscribe(($t:string) => {
      this.msg_failed_write = $t['Failed to write the data'],
      this.msg_unrealized = $t['Unrealized, code:'],
      this.msg_contact_admn = $t['Please contact the system administrator.'],
      this.msg_close = $t['Close'],
      this.msg_yes_delete = $t['Yes, delete'],
      this.msg_no_cancel = $t['No, cancel'],
      this.msg_item_removed = $t['Item has removed.'],
      this.msg_status_changed = $t['Status changed has success.'],
      this.msg_status_not_changed = $t['Could not change status, fail!'],
      this.msg_ops_not_delete = $t['Ops!, You can not delete records that have links to other records'],
      this.msg_not_delete = $t['Could not delete'],
      this.msg_save_success = $t['Save with success'],
      this.msg_error_occurred = $t['An error has occurred'],
      this.msg_new = $t['New'],
      this.msg_edit = $t['Edit'],
      this.msg_action = $t['Action'],
      this.msg_deletion_title = $t['Delete'],
      this.msg_deletion_text = $t['Confirm deletion']
    });
  }

  public _getTitleScreen(data: any, screen: string): string {
    this.translate.get(['Edit', 'New', screen]).subscribe((text:string) => {
      screen = text[screen];
      screen = data && data.id ? `${text['Edit']} ${screen}` : `${text['New']} ${screen}`;
    });
    return screen;
  }
  
  /***************** SNACKBAR ****************/

  public _showMessage( title: string = this.msg_save_success, comment: string = 'OK', css_class = 'snack_success' ) {
    this.snackBar.openSnackBar(title, comment, css_class);
  }

  public _showErrorMessage( title: string = this.msg_error_occurred, comment: string = this.msg_close ) {
    this.snackBar.openErrorSnackBar( title, comment );
  }

  public _showStatusMessage(css_class = 'snack_success' ) {
    this.snackBar.openSnackBar(this.msg_status_changed, 'Ok', css_class);
  }

  public _showStatusErrorMessage() {
    this.snackBar.openErrorSnackBar( this.msg_status_not_changed, this.msg_close );
  }



  /**************** ACTIONS ******************/

  public _dialogRequestHandler( res: any, dialogRefs: CommonModule ) {
    if(res.status == 'success') {
      this.responseOk(res, dialogRefs);
    } else {
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: new confirmDialogModel({
          title: this.msg_failed_write,
          text: this.msg_action + ' ' +  this.msg_unrealized + ' ' +  res.error.error.code + ', ' + this.msg_contact_admn,
          buttonCancel: this.msg_close
        })
      });
      this.responseError(res, dialogRefs);
      //escuta resposta do dialog
      return dialogRef.afterClosed().pipe(map(result => {
        // se clicou em ok
        if (result && result.choice == 'ok') {
          return true;
        } else {
          return false;
        }
      }));
    }
    LoadingEventsService.emitLoaded.emit(this.loadingEvent);
  }
  

  /**************** DELETE ******************/

  /**
   * Exibe um dialog para confirmação de exclusão
   * @param title 
   * @param text 
   */
  public _confirmDelete(): Observable<Boolean> {
    let confirm: boolean = false;
    //Solicita a confirmação para exclusão
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new confirmDialogModel({
        title: this.msg_deletion_title,
        text: this.msg_deletion_text,
        buttonOk: this.msg_yes_delete,
        buttonCancel: this.msg_no_cancel
      })
    });
    //escuta resposta do dialog
    return dialogRef.afterClosed().pipe(map(result => {
      // se clicou em ok
      if (result && result.choice == 'ok') {
        return true;
      } else {
        return false;
      }
    })); 
  }

  /**
   * Exibe as mensagens de sucesso ou erro caso a requisição seja bem sucedida.
   * @param res 
   */
  public _deleteRequestHandler(res: any): void {
      // emite o evento para finalizar a barra de carregamento
      LoadingEventsService.emitLoaded.emit(this.loadingEvent);
      if(res.status == 'success') {
        this.snackBar.openSnackBar(this.msg_status_changed, 'Ok', 'green-snackbar');
      } else {
        this.dialog.open(ConfirmDialogComponent, {
          width: '400px',
          data: new confirmDialogModel({
            text: this.msg_ops_not_delete,
            buttonCancel: this.msg_close
          })
        });
      }
  }

  /**
   * Exibe mensagens de erro, caso ocorra algum problema na requisição.
   * @param error 
   */
  public _deleteErrorRequestHandler(error: any) {
    // emite o evento para finalizar a barra de carregamento
    LoadingEventsService.emitLoaded.emit(this.loadingEvent);
    console.error(error);
    // se o erro for 404, não exibe mensagem
    if ( error.substr(0,3) !== '404' ) {
      // se for erro por item que não pode ser excluido
      if ( error.indexOf('ConstraintViolationException') !== -1 ) {
        // exibe mensagem de erro por conter vinculos
        this.dialog.open(ConfirmDialogComponent, {
          width: '400px',
          data: new confirmDialogModel({
            text: this.msg_not_delete,
            buttonCancel: this.msg_close
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
            buttonCancel: this.msg_close
          })
        });
      } else {
        // exibe mensagem de erro em uma janela
        this.dialog.open(ConfirmDialogComponent, {
          width: '400px',
          data: new confirmDialogModel({
            text: error,
            buttonCancel: this.msg_close
          })
        });
      }
    }
  }

  /**************** INTERNAL UTILS ******************/

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
    //this.form.enable();
    // exibe mensagem de sucesso
    this.snackBar.openSnackBar(this.msg_save_success, 'Ok', 'green-snackbar');
    // fecha o dialog
    if (dialog && dialog !== null)
      dialog.close('saved');
  }

  /**
   * se o resultado da operacao der erro
   * @param {any} error resposta do servico
   */
  protected responseError(error:any, dialog): void {
    console.error(error);
    // exibe mensagem de erro
    this.snackBar.openSnackBar(this.msg_error_occurred, this.msg_close, 'red-snackbar');
    // flag de carregamento
    this.loading = false;
    // fecha o dialog
    if (dialog && dialog !== null)
      dialog.close('cancel');
  }

  
}
