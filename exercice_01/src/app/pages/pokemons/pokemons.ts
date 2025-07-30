import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {PokemonCard} from '../../components/pokemon-card/pokemon-card';

interface Pokemon{
  id?: number,
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
  selector: 'app-pokemons',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PokemonCard
  ],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css'
})
export class Pokemons {



  scratch : Attack = {
    name : "scratch",
    description : "scratch",
    damages : 15,
    type : "normal"
  }

  fireSpin : Attack = {
    name : "fire-spin",
    description : "fire-spin",
    damages : 25,
    type : "fire"
  }

  growl : Attack = {
    name : "growl",
    description : "growl",
    damages  : 0,
    type : "normal"
  }

  toxic : Attack = {
    name : "toxic",
    description : "toxic",
    damages : 0,
    type : "poison"
  }

  charmander : Pokemon = {
    name : "Charmander",
    description : "starter 1gen",
    types : ["feu"],
    attacks : [this.growl, this.fireSpin, this.toxic, this.scratch]
  }

  cyndaquil : Pokemon = {
    name : "Cyndaquil",
    description : "starter 2gen",
    types : ["feu"],
    attacks : [this.fireSpin, this.scratch, this.growl, this.toxic]
  }

  pokedex : Pokemon[] = [this.charmander, this.cyndaquil];


  pokedex_form : FormGroup = new FormGroup(
    {
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      types : new FormArray([new FormControl(""), new FormControl("")]),
      attacks: new FormArray([
        new FormGroup({
          name : new FormControl("", [Validators.required]),
          description : new FormControl("", [Validators.required]),
          damages : new FormControl(0, [Validators.required]),
          type : new FormControl("", [Validators.required]),
        }),
      ]),
    }, [Validators.required]
  )

  get types() {
    return this.pokedex_form.controls["types"] as FormArray;
  }

  get attacks() {
    return this.pokedex_form.controls["attacks"] as FormArray;
  }

  addAttack(){
    this.attacks.push(new FormGroup({
      name : new FormControl("", [Validators.required]),
      description : new FormControl("", [Validators.required]),
      damages : new FormControl(0, [Validators.required]),
      type : new FormControl("", [Validators.required]),
    }))
  }

  save_pkmn(){
    if(this.pokedex_form.valid){
      console.log("Pokemon : ", this.pokedex_form.value)
      this.pokedex.push(this.pokedex_form.value)
      this.pokedex_form.reset();
    }
  }

  handleData(data : string) : void{
    for (let pkmn of this.pokedex){
      if (pkmn.name === data) {
        console.log(pkmn)
        this.pokedex.splice(this.pokedex.indexOf(pkmn), 1)
      }
    }
  }

}
