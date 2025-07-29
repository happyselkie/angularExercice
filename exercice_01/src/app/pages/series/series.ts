import { Component } from '@angular/core';
import {SortarrayPipePipe} from '../../utils/sortarray-pipe-pipe';

@Component({
  selector: 'app-series',
  imports: [
    SortarrayPipePipe
  ],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class Series {
  series : string[] = ["Stranger Things", "Love Death Robot", "Vikings", "The Office"]
  order : string = ""

  removeItem(i:number){
    this.series.splice(i, 1);
  }

  changeOrder(order:string){
    this.order = order;
  }

}
