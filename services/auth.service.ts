import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';

import { TokenService } from './token.service';
import { Usuario } from '../interfaces/usuario';
import { environment, TOKEN_STORAGE } from '../../environments/environment';
import { TokenApi } from '../interfaces/respostas/token-api';
import { UsuarioService } from './usuario.service';

import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _autenticado: BehaviorSubject<boolean>;
  public readonly autenticado$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {
    this._autenticado = new BehaviorSubject(false);
    this.autenticado$ = this._autenticado.asObservable();
  }

  logar(usuario: Usuario): Observable<any> {
    this.resetarSessao();
    const url = `${environment.linguagensApiUrl}/login`;
    return this.http.post<TokenApi>(url, usuario).pipe(
      map((response: any) => {
        localStorage.setItem('user', JSON.stringify(response.data.users));
        if (!this.criarSessao(response.data.token)) {
          console.error('Ocorreu um erro', new Error());
          throw new Error();
        }
        return response;
      })
    );
  }

  deslogar(): Observable<TokenApi> {
    let tokenHash = localStorage.getItem(TOKEN_STORAGE);
    this.resetarSessao();
    const url = `${environment.linguagensApiUrl}/logout`;
    return this.http.post<TokenApi>(url, {token:tokenHash}).pipe(
      finalize(() => { this.resetarSessao(); })
    );
  }

  criarSessao(token: string): boolean {
    try {
      const usuario: Usuario = jwtDecode(token);
      this.usuarioService.setUsuario(usuario);
      this.tokenService.token = token;
      this._autenticado.next(true);
      return true;
    } catch (err) {
      return false;
    }
  }

  resetarSessao() {
    this.tokenService.resetarToken();
    this.usuarioService.resetarSessao();
    if (this._autenticado.value) {
      this._autenticado.next(false);
    }
  }

  /**
   * Retorna erros de requisição no console.
   * @param operation 
   * @param result 
   */
  private handleErrors (operation = 'operation', result: any) {
    console.error(operation + ' -> ' + result);
    return result;
  }

}