import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjPipe'
})
export class CnpjPipe implements PipeTransform {
  transform(value: string|number, args?: any[]): string {
    return String(value).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }
}
