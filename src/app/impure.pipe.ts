import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure'
})
export class ImpurePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    return new Date().toLocaleString();
  }

}
