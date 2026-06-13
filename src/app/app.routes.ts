import { Routes } from '@angular/router';
import { Sobre } from './sobre/sobre';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre }
];
