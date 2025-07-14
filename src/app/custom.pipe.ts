import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  pure: false
})
export class CustomPipe implements PipeTransform {

  private DatePipe = new DatePipe('en-us');

  transform(value: any, ...args: any[]): any {
  //  if(value == '' || value == null || value == undefined) {
  //    return 'NA';
  //  } else {
  //    return value ? '+91 ' + value : value;
  //  }
    return this.DatePipe.transform(value, 'dd-MM-YYYY')
  }

}
