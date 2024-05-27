import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyVND'
})
export class CurrencyVNDPipe implements PipeTransform {

  transform(value: number,) {
    if (value) 
      return value.toLocaleString("it-IT", { style: "currency", currency: "VND" });
    return 0;
  }

}
