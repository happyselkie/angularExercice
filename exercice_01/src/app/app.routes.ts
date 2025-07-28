import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Series} from './pages/series/series';
import {Counter} from './pages/counter/counter';

export const routes: Routes = [
  {path: "", component:Home},
  {path: "series", component:Series},
  {path: "counter", component:Counter}
];
