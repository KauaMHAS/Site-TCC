import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RevealDirective } from './directives/reveal.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RevealDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
