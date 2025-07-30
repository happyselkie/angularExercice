import {Component, Input, Output, EventEmitter} from '@angular/core';

interface Pokemon{
  name : string,
  description : string,
  types : string[],
  attacks : Attack[]
}

interface Attack{
  name :string,
  description : string,
  damages : number,
  type :string,
}

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {
  @Input() pokemon! : Pokemon;

  @Output() dataEmitted = new EventEmitter<string>()

  sendData(){

    this.dataEmitted.emit(this.pokemon.name);
  }

}
