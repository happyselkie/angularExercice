import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ApiService} from '../../utils/service/api-service';
import {Pokemon} from '../../utils/types/pokemon.type';
import {UcfirstPipe} from '../../utils/ucfirst-pipe';
import {GetTypePipe} from '../../utils/get-type-pipe';

interface PokeListResult {
  name : string,
  url : string
}

interface PokeList {
  results : PokeListResult[]
}

@Component({
  selector: 'app-pokedex',
  imports: [
    UcfirstPipe,
    GetTypePipe,
  ],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css'
})


export class Pokedex implements OnInit{
  pokedex : Pokemon[] = [];
  pokeList : PokeList = { results : [] };
  listError : string = "";
  pokemon : Pokemon = {
    id: 0,
    name: "",
    height : 0,
    weight : 0,
    order : 0,
    types : [],
    moves : [{
      move : {
        name : ""
      }
    }],
  };

  constructor(private apiService : ApiService) {}

  // Au chargement du composant => GET
  ngOnInit(): void {
    this.pokeList = { results : [] };
      this.apiService.getList().subscribe({
      next: data => {
        this.pokeList.results = data.results

        for(let pokemon of this.pokeList.results){
          let pokeUrl = pokemon.url

          this.apiService.getPokemon(pokeUrl).subscribe({
            next: data => {
              this.pokedex.push(data)
            },
            error: err => this.listError = err
          })
        }

      },
      error: err => console.log(err)
    });
  }

  displayPokemon(id : number){
   // this.pokemon = pokemon;

    this.apiService.getPokemon('https://pokeapi.co/api/v2/pokemon/'+id).subscribe({
      next: data => {
        this.pokemon = data;
        let modal = document.getElementById("modal");
        modal?.classList.remove('hidden');
      },
      error: err => this.listError = err
    })
  }

  closeModal():void{
    let modal = document.getElementById("modal");
    modal?.classList.add('hidden');
  }

}
