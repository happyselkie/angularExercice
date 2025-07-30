import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

interface Pokemon{
  name : string,
  description : string,
  types : string[],
  attacks : [{
    name :string,
    description : string,
    damages : number,
    type :string,
  },
    {
      name :string,
      description : string,
      damages : number,
      type :string,
    },
    {
      name :string,
      description : string,
      damages : number,
      type :string,
    },
    {
      name :string,
      description : string,
      damages : number,
      type :string,
    }]
}


@Component({
  selector: 'app-pokemons',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css'
})
export class Pokemons {

  pokedex : Pokemon[] = [];


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
        new FormGroup({
          name : new FormControl("", [Validators.required]),
          description : new FormControl("", [Validators.required]),
          damages : new FormControl(0, [Validators.required]),
          type : new FormControl("", [Validators.required]),
        }),
        new FormGroup({
          name : new FormControl("", [Validators.required]),
          description : new FormControl("", [Validators.required]),
          damages : new FormControl(0, [Validators.required]),
          type : new FormControl("", [Validators.required]),
        }),
        new FormGroup({
          name : new FormControl("", [Validators.required]),
          description : new FormControl("", [Validators.required]),
          damages : new FormControl(0, [Validators.required]),
          type : new FormControl("", [Validators.required]),
        })
      ]),
    }, [Validators.required]
  )

  get types() {
    return this.pokedex_form.controls["types"] as FormArray;
  }

  get attacks() {
    return this.pokedex_form.controls["attacks"] as FormArray;
  }

  save_pkmn(){
    if(this.pokedex_form.valid){
      console.log("Pokemon : ", this.pokedex_form.value)
      this.pokedex.push(this.pokedex_form.value)
      this.pokedex_form.reset();
    }
  }

}
