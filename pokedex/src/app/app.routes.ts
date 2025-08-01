import { Routes } from '@angular/router';
import {Pokedex} from './pages/pokedex/pokedex';
import {Team} from './pages/team/team';

export const routes: Routes = [
  {path: "", component: Pokedex},
  {path: "team", component: Team}
];
