import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getType'
})
export class GetTypePipe implements PipeTransform {

  transform(value: string): string {
    let txt : string = value.slice(-3);
    return txt.substring(0, 2)
  }

}
