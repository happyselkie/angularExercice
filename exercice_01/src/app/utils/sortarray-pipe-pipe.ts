import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortarrayPipe',
  standalone: true
})
export class SortarrayPipePipe implements PipeTransform {

  transform(value: string[], order: string): string[] {
    if (order === "desc"){
      return value.sort().reverse();
    } else if(order === "asc"){
      return value.sort();
    } else {
      return value;
    }
  }

}
