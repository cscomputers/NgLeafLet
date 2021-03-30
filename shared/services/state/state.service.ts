import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';

import { State } from './state.model';
import { CommonService } from '../../common/common.service';


@Injectable()
export class StateService extends CommonService {

  constructor(injector:Injector) {
    super(injector);

    // url do servico
    this.apiUrl = 'state/';
    // evento
    this.loadingEvent = 'states';
  }

  /**
   * solicita a lista de estados
   * @return {Observable<Estado[]>} objeto com os dados
   */
  public getStates(): Observable<State[]> {

    return this._loadData();

  }

  loadData(): Observable<any> {
    return this.getStates();
  }

  sendData() { return of(true); }

  editData() { return of(true); }

  deleteData() { return of(true); }

}
