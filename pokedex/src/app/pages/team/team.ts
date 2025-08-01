import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../utils/types/pokemon.type';
import {ApiService} from '../../utils/service/api-service';
import {log} from 'node:util';
import {UcfirstPipe} from '../../utils/pipes/ucfirst-pipe';
import {GetTypePipe} from '../../utils/pipes/get-type-pipe';

@Component({
  selector: 'app-team',
  imports: [
    UcfirstPipe,
    GetTypePipe
  ],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team implements OnInit {

  teamIds : number[] = [];
  team : Pokemon[] = [];
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

  ngOnInit(): void {
    if (typeof  window !== 'undefined' && window.localStorage){
      if(localStorage.getItem("team") !== null) this.teamIds = JSON.parse(localStorage.getItem("team") || '{}');
    }

    if (this.teamIds.length > 0) for (let id of this.teamIds){
      this.apiService.getPokemon('https://pokeapi.co/api/v2/pokemon/'+id).subscribe({
        next: data => {
          this.team.push(data);
        },
        error: err => console.log(err)
      })
    }

  }


  displayPokemon(id : number){
    this.apiService.getPokemon('https://pokeapi.co/api/v2/pokemon/'+id).subscribe({
      next: data => {
        this.pokemon = data;
        let modal = document.getElementById("modal");
        modal?.classList.remove('hidden');
      },
      error: err => console.log(err)
    })
  }

  closeModal():void{
    let modal = document.getElementById("modal");
    modal?.classList.add('hidden');
  }

  removePkmn(pkmn : Pokemon){
    this.teamIds.splice(this.teamIds.indexOf(pkmn.id), 1);
    this.team.splice(this.team.indexOf(pkmn), 1);
    localStorage.setItem("team", JSON.stringify(this.teamIds))
  }



}
