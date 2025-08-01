import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Pokedex} from './pages/pokedex/pokedex';
import {Navbar} from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokedex, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokedex');
}
