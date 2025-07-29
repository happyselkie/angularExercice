import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Series} from './pages/series/series';
import {Counter} from './pages/counter/counter';
import {Librairie} from './pages/librairie/librairie';

export const routes: Routes = [
  {path: "", component:Home},
  {path: "series", component:Series},
  {path: "counter", component:Counter},
  {path: "librairie", component:Librairie}
];
