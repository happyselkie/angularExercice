import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from '../types/pokemon.type';

interface PokeList {
  results : PokeListResult[]
}

interface PokeListResult {
  name : string,
  url : string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

  constructor( private http : HttpClient) {}

  getList() : Observable<PokeList>{
    return this.http.get<PokeList>(this.baseUrl)
  }

  getPokemon(pokeUrl: string) : Observable<Pokemon>{
    return this.http.get<Pokemon>(pokeUrl)
  }
}
