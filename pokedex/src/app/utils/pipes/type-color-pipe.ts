import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeColor'
})
export class TypeColorPipe implements PipeTransform {

  transform(value: string): string {
    let txt : string = value.slice(-3);
    let typeId : string = txt.substring(0, 2);

    return txt.substring(0, 2)
  }

}
