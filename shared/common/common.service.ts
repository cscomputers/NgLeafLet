import { Injector, Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable, of } from "rxjs";
import { map, catchError, mergeMap, tap } from "rxjs/operators";
import { LoadingEventsService } from "../services/loading-events/loading-events.service";
import { AuthService } from "../services/auth/auth.service";
import { environment, TOKEN_STORAGE } from "src/environments/environment";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class CommonService {
  protected http: Http;
  protected authService: AuthService;

  // url(s) do(s) servico(s)
  private _apiUrl = new Map();
  // key principal
  private key = "apiUrl";
  // cache de dados
  private cache = new Map();
  // evento sendo carregado
  protected loadingEvent: string;

  constructor(injector: Injector) {
    this.http = injector.get(Http);
    this.authService = injector.get(AuthService);

    // escuta evento de logoff
    AuthService.wasAuthenticated.subscribe(authenticated => {
      // se fez loggof, limpa o cache
      if (!authenticated) this.cache.clear();
    });
  }

  /**
   * seta a(s) url(s) do(s) servico(s)
   * @param  {string | [string|number,string]} pos se passar somente uma string, seta
   * como a url principal, se passar um Array, usa o primeiro parametro como key
   * e o segundo parametro como o valor
   */
  set apiUrl(pos: string | [string | number, string]) {
    if (typeof pos == "string")
      this._apiUrl.set(this.key, environment.baseApiUrl + pos);
    else this._apiUrl.set(pos[0], environment.baseApiUrl + pos[1]);
  }

  /**
   * retorna o valor da url principal
   * @return {string}
   */
  get apiUrl(): string | [string | number, string] {
    return this._apiUrl.get(this.key);
  }

  abstract loadData(...data): Observable<any>;

  /**
   * faz uma chamada get
   * @param  {string}                 keyDest chave da url a ser chamada
   * @param  {string|number}          pos     valor para adicionar a url chamada
   * @param  {boolean}                cache   se deve retornar o valor salvo em cache (default:true)
   * @param  {string}                 prop    propriedade a ser retornada da chamada (default:json)
   * @param  {[any,any]}              sub     parametros para substituir na url [busca,substituto]
   * @return {Observable<any>}                retorna um Observable
   */
  protected _loadData(
    keyDest?: string,
    pos?: string | number,
    cache: boolean = true,
    prop?: string,
    sub: [any, any] = [null, null],
    version: string = null
  ): Observable<any> {
    // se tem cache salvo
    if (keyDest && cache && this.cache.has(keyDest))
      return Observable.bind(this.cache.get(keyDest));
    else if (!keyDest && cache && this.cache.has(this.key))
      return Observable.bind(this.cache.get(this.key));

    // url
    const url =
      (keyDest ? this._apiUrl.get(keyDest) : this.apiUrl).replace(
        sub[0],
        sub[1]
      ) + (pos ? pos : "");

    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);

    //let token = localStorage.getItem(TOKEN_STORAGE);
    //let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });

    //options
    let tokenHash = localStorage.getItem(TOKEN_STORAGE);
    const options = this.requestOptions("POST", tokenHash, version);

    return this.http.post(url,'', options)
      .pipe(tap(
        res => {
          let data = prop ? res[prop] : res.json();

          // cria uma funcao para ordenar os itens
          const sortData = myData => {
            // se for um array
            if (
              Array.isArray(myData) &&
              typeof myData[0] !== "undefined" &&
              typeof myData[0].id !== "undefined"
            ) {
              // ordena se tiver um id
              myData.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
              // verifica se os subitens tb pode ser array
              for (let item of myData) {
                item = sortData(item);
              }
              // se alguma for array de objetos, percorre todas as propriedades para verificar
            } else if (myData && typeof myData === "object") {
              for (let item of Object.keys(myData)) {
                myData[item] = sortData(myData[item]);
              }
            }
            return myData;
          };

          // faz a ordenacao dos itens
          data = sortData(data);
          // console.log('valor recebido ->', data);
          // emite o evento para avisar que terminou de carregar
          LoadingEventsService.emitLoaded.emit(this.loadingEvent);

          //Guarda os dados em cache
          if (cache)
            keyDest
              ? this.cache.set(keyDest, res)
              : this.cache.set(this.key, res);

          return data;
        },
        error => {
          this.handleError(error);
        }
      )
    );
  }

  abstract sendData(...v): Observable<boolean>;

  /**
   * faz uma chamada post
   * @param  {any}                    data      dados a serem enviados
   * @param  {string}                 keyDest   key da url destino
   * @param  {string|number}          pos       valor a ser adicionado a url
   * @param  {string}                 prop      propriedade a ser retornada da chamada (default:boolean[status==200]), se passar o valor 'json', retorna o objeto
   * @param  {[any,any]}              sub       parametros para substituir na url [busca,substituto]
   * @return {Observable<any>}                  retorna um Observable
   */
  protected _sendData(
    data: any,
    keyDest?: string,
    pos?: string | number,
    prop?: string,
    sub: [any, any] = [null, null],
    version: string = null
  ): Observable<any> {
    // requisita um token
    let token = localStorage.getItem(TOKEN_STORAGE);
    // options
    const options = this.requestOptions("POST", token, version);

    // url
    const url =
      (keyDest ? this._apiUrl.get(keyDest) : this.apiUrl).replace(
        sub[0],
        sub[1]
      ) + (pos ? pos : "");

    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);

    // let body = data;
    // console.log(data);

    return of(
      this.http.post(url, data, options).pipe(
        map(res => {
          // console.log(res.json());
          // emite o evento para avisar que terminou de carregar
          LoadingEventsService.emitLoaded.emit(this.loadingEvent);
          // limpa o cache
          this.cache.clear();

          const data = prop
            ? prop == "json"
              ? res.json()
              : res[prop]
            : res.status === 200;

          return data;
        }),
        catchError(error => this.handleError(error))
      )
    );
  }

  abstract editData(...v): Observable<boolean>;

  /**
   * faz uma chamada put
   * @param  {any}                    data     dados a serem enviados
   * @param  {string}                 keyDest  key da url destino
   * @param  {string|number}          pos      valor a ser adicionado a url
   * @param  {string}                 prop     propriedade a ser retornada da chamada (default:boolean[status==200]), se passar o valor 'json', retorna o objeto
   * @param  {[any,any]}              sub      parametros para substituir na url [busca,substituto]
   * @return {Observable<any>}                 retorna um Observable
   */
  protected _editData(
    data: any,
    keyDest?: string,
    pos?: string | number,
    prop?: string,
    sub: [any, any] = [null, null],
    version: string = null
  ): Observable<any> {
    // requisita um token
    let token = localStorage.getItem(TOKEN_STORAGE);
    // options
    const options = this.requestOptions("POST", token, version);

    // url
    const url =
      (keyDest ? this._apiUrl.get(keyDest) : this.apiUrl).replace(
        sub[0],
        sub[1]
      ) + (pos ? pos : "");

    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);

    return of(
      this.http.put(url, data, options).pipe(
        mergeMap(res => {
          // console.log(res);
          // emite o evento para avisar que terminou de carregar
          LoadingEventsService.emitLoaded.emit(this.loadingEvent);
          // limpa o cache
          this.cache.clear();

          const data = prop
            ? prop == "json"
              ? res.json()
              : res[prop]
            : res.status === 200;

          return data;
        })
      ),
      catchError(error => this.handleError(error))
    );
  }

  abstract deleteData(...v): Observable<boolean>;

  /**
   * faz uma chamada delete
   * @param  {number}                 id        numero para ser adicionada na url
   * @param  {string}                 keyDest   key da url destino
   * @param  {string}                 prop      propriedade a ser retornada da chamada (default:boolean[status==200]), se passar o valor 'json', retorna o objeto
   * @param  {[any,any]}              sub       parametros para substituir na url [busca,substituto]
   * @return {Observable<boolean>}              retorna um Observable
   */
  protected _deleteData(
    id: number,
    keyDest?: string,
    prop?: string,
    sub: [any, any] = [null, null]
  ): Observable<boolean> {
    // requisita um token
    let token = localStorage.getItem(TOKEN_STORAGE);
    // options
    const options = new RequestOptions({
      headers: new Headers({
        Authorization: "Bearer " + token
      })
    });

    // url
    let url;
    if (id != null) {
      url =
        (keyDest ? this._apiUrl.get(keyDest) : this.apiUrl).replace(
          sub[0],
          sub[1]
        ) + id;
    } else {
      url = (keyDest ? this._apiUrl.get(keyDest) : this.apiUrl).replace(
        sub[0],
        sub[1]
      );
    }
    // emite o evento para exibir a barra de carregamento
    LoadingEventsService.emitLoading.emit(this.loadingEvent);

    return this.http.delete(url, options).pipe(
      map(res => {
        // emite o evento para avisar que terminou de carregar
        LoadingEventsService.emitLoaded.emit(this.loadingEvent);
        // limpa o cache
        this.cache.clear();

        const data = prop
          ? prop == "json"
            ? res.json()
            : res[prop]
          : res.status === 200;

        return data;
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * limpa o cache
   * @param {string|number} key chave da url
   */
  public clearCache(key?: string | number): void {
    if (key && this.cache && this.cache.has(key)) this.cache.delete(key);
    else if (this.cache) this.cache.clear();
  }

  /**
   * funcao de erro
   * @param  {Response | any} error erro ocorrido
   */
  protected handleError(error: Response | any) {
    console.log(error);
    // emite o evento para avisar que terminou de carregar
    LoadingEventsService.emitLoaded.emit(this.loadingEvent);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body["error"] || JSON.stringify(body);
      const msg = body["message"] || "";
      if (error.status == 409 || error.status == 412 || error.status == 422) {
        errMsg = `${msg}`;
      } else {
        errMsg = `${error.status} - ${error.statusText || ""} ${err} ${msg}`;
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error('deu erro ->', errMsg);
    return Observable.throw(errMsg);
  }

  //Monta o Headers conforme parâmetros.
  private requestOptions(
    method: string,
    token: string,
    version: string = null
  ) {
    let options = null;

    switch (method) {
      case "POST":
      case "PUT":
        if (version !== null) {
          options = new RequestOptions({
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "X-API-Version": version
            })
          });
        } else {
          options = new RequestOptions({
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: "Bearer " + token
            })
          });
        }
        break;
      case "GET":
      case "DELETE":
        if (version !== null) {
          options = new RequestOptions({
            headers: new Headers({
              Authorization: "Bearer " + token,
              "X-API-Version": version
            })
          });
        } else {
          options = new RequestOptions({
            headers: new Headers({
              Authorization: "Bearer " + token
            })
          });
        }
        break;
      default:
        break;
    }
    return options;
  }
  
  
}
