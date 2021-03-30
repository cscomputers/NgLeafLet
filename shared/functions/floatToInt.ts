/**
 * Converte valor com ponto flutuante em integer limpo.
 * @param  {string} val valor ('9.999,99')
 * @return {number}     '9999'
 */
export const floatToInt = (value:number): number => {
    let val = value.toString();
    const [num, dec] = val.split(',');
    val = num.replace('.','');
    return +(parseInt(val.replace(/[^\d|\-]+/g,'')));
};