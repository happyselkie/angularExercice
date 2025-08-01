import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ApiService} from '../../utils/service/api-service';
import {Pokemon} from '../../utils/types/pokemon.type';
import {UcfirstPipe} from '../../utils/pipes/ucfirst-pipe';
import {GetTypePipe} from '../../utils/pipes/get-type-pipe';

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
  list : Pokemon[] = [];
  team : number[] = [];
  pokeList : PokeList = { results : [] };
  listError : string = "";
  search : string = "";
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
    if (typeof  window !== 'undefined' && window.localStorage){
      if(localStorage.getItem("team") !== null) this.team = JSON.parse(localStorage.getItem("team") || '{}');
    }

    this.list = this.pokedex;
  }

  displayPokemon(id : number){
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

  toggleTeam(id: number){
    if (this.team.includes(id)) this.team.splice(this.team.indexOf(id), 1)
    else this.team.push(id);
    localStorage.setItem("team", JSON.stringify(this.team))
  }

  sendTerms(event : Event){
    let input = event.target as HTMLInputElement
    console.log(input.value)
    if (input.value.length > 2){
      this.list.filter((pokemon) => pokemon.name.includes(input.value))
    } else {
      this.list = this.pokedex;
    }
  }


}
