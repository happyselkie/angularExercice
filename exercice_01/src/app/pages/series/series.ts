import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class Series {
  series : string[] = ["Stranger Things", "Love Death Robot", "Vikings", "The Office"]

  removeItem(i:number){
    this.series.splice(i, 1);
  }
}
