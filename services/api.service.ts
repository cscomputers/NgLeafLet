/**
 * @description Classe Genérica, principal para requisições de CRUD, Angular 7.
 * @author Antonio Carlos Lázaro de Oliveira - Entersoft Software e Serviços
 * @copyright Free MIT.
 */

import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingEventsService } from 'src/app/shared';
import { environment } from 'src/environments/environment.prod';
import { Users } from '../paginas/restrito/administracao/users/users.model';
import * as _ from 'lodash';
import { MatSnackBarComponent } from '../compartilhado/mat-snack-bar/mat-snack-bar.component';
import { TranslateService } from '@ngx-translate/core';
import { MessageHandlerService } from './message-handler.service';

const baseApiURL = environment.baseApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Flag de sucesso na requisição
  private ok: boolean;

  protected snackBar: MatSnackBarComponent;
  // evento sendo carregado
  protected loadingEvent: string;
  private txt_close: string = '';
  private txt_error_msg: string = '';

  constructor(injector:Injector, private translate: TranslateService, private httpClient: HttpClient, private messageHandler: MessageHandlerService) { 
    this.snackBar = injector.get(MatSnackBarComponent);
    this.translate.get(['Close','An Server error has occurred']).subscribe(($t:string) => {
      this.txt_error_msg = $t['An Server error has occurred'];
      this.txt_close = $t['Close'];
    });
  }

  /**
   * Lista os registros sem filtro.
   * @param listUrlApi
   */
  loadData(listUrlApi: string): any {
    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);
    return this.httpClient.post(baseApiURL+listUrlApi,null)
      .pipe(tap(),catchError(error=> of(this.handleErrors('Load data', {error: error}))));
  }

  /**
   * Lista os dados paginados
   * @param listUrlApi 
   */
  listData(listUrlApi: string, page: number = 1, per_page: number = 20, filter_obj: any = null, order_by: string = null, dir: string = null): any {
    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);
    let url = baseApiURL+listUrlApi+'?page='+page+'&per_page='+per_page;
    if(order_by !== null) url = url + '&sort='+order_by;
    if(order_by !== null && dir !== null) url = url + '&direction='+dir;
    let filter: any;
    if(filter_obj !== null) {
      filter_obj = _.omitBy(filter_obj, v => (_.isBoolean(v)||_.isFinite(v)) ? false : _.isEmpty(v));
      filter = filter_obj ? {filter:filter_obj} : null;
    }
    return this.httpClient.post(url, filter && filter !== null ? filter : null)
      .pipe(tap(),catchError(error=> of(this.handleErrors('Load data', {error: error}))));
  }

   /**
   * Envia algo...
   * @param urlApi
   */
  postSomeThing(urlApi: string, param:any = null): any {
    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);
    return this.httpClient.post(baseApiURL+urlApi, param)
      .pipe(tap(res=>{
        this.ok = true;
        LoadingEventsService.emitLoaded.emit(this.loadingEvent);
      }),catchError(error=> of(this.handleErrors('Find One data', {error: error}))));
  }

  /**
   * Cria um registro.
   * @param obj 
   * @param createUrlApi 
   */
  createData<T>(obj: T, createUrlApi: string): any {
    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);
    return this.httpClient.post(baseApiURL+createUrlApi,obj)
      .pipe(tap(res=>{this.ok = true}),catchError(error=> of(this.handleErrors('Create data', {error: error}))));
  }

  /**
   * Atualiza um registro.
   * @param obj 
   * @param editUrlApi 
   */
  updateData<T>(obj: T, editUrlApi: string, id: string = ''): any {
    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);
    return this.httpClient.patch(baseApiURL+editUrlApi+id, obj)
      .pipe(tap(res=>{this.ok = true}),catchError(error=> of(this.handleErrors('Update data', {error: error}))));
  }

  /**
   * Exclui um registro.
   * @param id 
   * @param deleteUrlApi
   */
  removeData(id: string | number, deleteUrlApi: string): any {
    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);
    const options = { headers: {}, body: { id: id } };
    return this.httpClient.delete(baseApiURL+deleteUrlApi, options)
      .pipe(tap((res)=>{this.ok = true}),catchError(error=> of(this.handleErrors('Delete data', {error: error}))));
  }

  recuperarSenha(usuario: string):any {
    const url = `${environment.linguagensApiUrl}/password/create`;
    return this.httpClient.post(url, {email:usuario})
      .pipe(tap(res=>{this.ok = true}),catchError(error=> of(this.handleErrors('Recovery Password', {error: error}))));
  }

  resetPassword(usuario: Users, token: string):any {
    const url = `${environment.linguagensApiUrl}/password/reset`;
    return this.httpClient.post(url, {email: usuario.email, password: usuario.password, token: token})
      .pipe(tap(res=>{this.ok = true}),catchError(error=> of(this.handleErrors('Reset Password', {error: error}))));
  }

  /**
   * Retorna erros de requisição no console.
   * @param operation 
   * @param result 
   */
  private handleErrors (operation = 'operation', result: any) {
    this.ok = false;
    //this.snackBar.openErrorSnackBar(this.txt_error_msg, this.txt_close);
    LoadingEventsService.emitLoaded.emit(this.loadingEvent);
    return result;
  }

}
