import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): string {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
  }

}
