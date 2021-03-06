/**
 * converte o valor de numero para moeda
 * @param  {number} num numero ('9999.99')
 * @return {string}     'R$ 9.999,99'
 */
export const numberToMoney = (num:number, symbol:boolean = true): string => {
  const p = num.toFixed(2).split('.');
  let rs = !symbol ? '' : 'R$ ';
  return rs + (p[0].indexOf('-') < 0 ? '' : '-') + p[0].split('').reverse().reduce( (acc, num, i, orig) => num == '-' ? acc : num + (i && !(i % 3) ? '.' : '') + acc, '' ) + ',' + p[1];
};
