import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CommonService } from '../../common/common.service';
import { City } from './city.model';
import { map } from 'rxjs/operators';


@Injectable()
export class CityService extends CommonService {

  // cache de dados
  private listCache = new Map();

  constructor(injector:Injector) {
    super(injector);

    // url do servico
    this.apiUrl = 'city/state/';
    // evento
    this.loadingEvent = 'cities';
  }

  /**
   * solicita a lista de cidades por estado
   * @return {Observable<City[]>} objeto com os dados
   */
  public getCities(idState: number): Observable<City[]> {
    // verifica se tem cache
    if ( this.listCache !== null && this.listCache.has(idState) ) {
      return of(this.listCache.get(idState));
    }

    return this._loadData(null, idState, false)
      .pipe(map( res => {
        // guarda em cache
        this.listCache.set(idState, res);

        return res;
      } ));

  }

  loadData() { return of(true); }

  sendData() { return of(true); }

  editData() { return of(true); }

  deleteData() { return of(true); }

}
