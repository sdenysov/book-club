import {Pipe, PipeTransform} from '@angular/core';
import {isString} from 'util';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (isString(value)) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
}
