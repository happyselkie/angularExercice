import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Counter} from './pages/counter/counter';
import {Navbar} from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercice_01');
}
