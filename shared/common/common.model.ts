import { numberToMoney } from '../functions/number-to-money';
import { moneyToNumber } from '../functions/money-to-number';
import * as moment from 'moment';

export abstract class CommonModel {

  /**
   * mescla objeto passado com o atual
   * @param {Object} obj Objeto de dados
   */
  merge(obj:Object): void {
    if (obj) {
      for (let key of Object.getOwnPropertyNames(this)) {
        this[key] = obj[key] !== 'undefined' ? obj[key] : null;
      }
    }
  }

  /**
   * converte valor da propriedade de number para string
   * @param {string} prop nome da propriedade
   */
  numberToString(prop:string): void {
    this[prop] = typeof(this[prop]) !== 'undefined' ? String(this[prop]) : this[prop];
  }

  /**
   * converte valor da propriedade de string para number
   * @param {string} prop nome da propriedade
   */
  stringToNumber(prop:string): void {
    this[prop] = typeof(this[prop]) !== 'undefined' ? + this[prop] : this[prop];
  }

  /**
   * converte valor da propriedade de timestamp para date
   * @param {string} prop nome da propriedade
   */
  timestampToDate(prop:string): void {
    this[prop] = (typeof(this[prop]) !== 'undefined') && (this[prop] !== null) ? new Date(this[prop]) : this[prop];
  }

  /**
   * converte valor da propriedade de date para timestamp
   * @param {string} prop nome da propriedade
   */
  dateToTimestamp(prop:string): void {
    this[prop] = (typeof(this[prop]) !== 'undefined') && (this[prop] !== null) ? this[prop]['getTime']() : this[prop];
  }

  /**
   * converte valor da propriedade de Date para o formato ISO-8601 sem timezone.
   * Output ex.: 2018-07-17T16:35:00.000
   * @param {string} prop nome da propriedade
   */
  dateToISO(prop:string): void {
    let date:Date = new Date(this[prop]);
    this[prop] = (typeof(this[prop]) !== 'undefined') && (this[prop] !== null) ? moment(date).format("YYYY-MM-DDTHH:mm:ss.000") : this[prop];
  }

  /**
   * 
   * @param prop Converte de ISO para o formato Date.
   */
  isoToDate(prop:string): void {
    moment.locale('en-ca');
    this[prop] = (typeof(this[prop]) !== 'undefined') && (this[prop] !== null) ? moment(this[prop]).format() : this[prop];
  }

  /**
   * Converte um objeto do tipo Date para uma string no formato yyyy-MM-dd.
   * @param prop 
   */
  dateToString(prop:string): void {
    moment.locale('en-ca'); // Para formato Ano-mes-dia usar o pattern Ingl??s Canadense.
    this[prop] = (typeof(this[prop]) !== 'undefined') && (this[prop] !== null) ? moment(this[prop]).format('L') : this[prop];
  }

  /**
   * Converte um objeto do tipo Date para uma string no formato dd/MM/yyyy HH:mm:ss.
   * @param prop 
   */
  isoToDatetime(prop:string): void {
    moment.locale('pt-br'); 
    this[prop] = (typeof(this[prop]) !== 'undefined') && (this[prop] !== null) ? moment(this[prop]).utc().format('L') + ' ' +  moment(this[prop]).format('LT') : this[prop];
  }

  /**
   * Converte uma string no formato string para um objeto do tipo Date.
   * @param prop 
   */
  stringToDate(prop:string): void {
    moment.locale('pt-br');
    this[prop] = (typeof(this[prop]) !== 'undefined') && (this[prop] !== null) ? moment(this[prop]).utc().format() : this[prop];
  }

  /**
   * Converte um objeto do tipo Date para uma string no formato HH:mm:ss
   * @param prop 
   */
  dateToTimeFormat(prop:string): void {
    moment.locale('pt-br');
    this[prop] = (typeof(this[prop]) !== 'undefined') && (this[prop] !== null) ? moment(this[prop]).format('LTS') : this[prop];
  }

  /**
   * converte valor da propriedade de number para boolean
   * @param {string} prop nome da propriedade
   */
  numberToBoolean(prop:string): void {
    this[prop] = typeof(this[prop]) !== 'undefined' ? (this[prop] ? true : false) : this[prop];
  }

  /**
   * converte valor da propriedade de boolean para number
   * @param {string} prop nome da propriedade
   */
  booleanToNumber(prop:string): void {
    this[prop] = typeof(this[prop]) !== 'undefined' ? (this[prop] ? 1 : 0) : this[prop];
  }

  /**
   * converte valor da propriedade de null para boolean (false)
   * @param {string} prop nome da propriedade
   */
  nullToBoolean(prop:string): void {
    this[prop] = typeof(this[prop]) !== 'undefined' ? (this[prop] ? true : false) : this[prop];
  }

  /**
   * remove letras e deixa somente numeros
   * @param {string} prop nome da propriedade
   */
  removeLetters(prop:string) :void {
    this[prop] = typeof(this[prop]) !== 'undefined' ? this[prop].replace(/[^\d]+/g,'') : this[prop];
  }

  /**
   * transforma 'R$ 9.999,99' em '9999.99'
   * @param {string} prop nome da propriedade
   */
  moneyToNumber(prop:string) :void {
    this[prop] = typeof(this[prop]) !== 'undefined' ? moneyToNumber(this[prop]) : this[prop];
  }

  /**
   * transforma '9999.99' em 'R$ 9.999,99'
   * @param {string} prop nome da propriedade
   */
  numberToMoney(prop:string) :void {
    this[prop] = typeof(this[prop]) !== 'undefined' ? numberToMoney(this[prop]) : this[prop];
  }
}
