import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../pages/librairie/book';

@Pipe({
  name: 'isreadEmoji',
  standalone : true
})
export class IsreadEmojiPipe implements PipeTransform {

  transform(isRead : boolean): string {
    return isRead ? "👍" : "👎"
  }

}
