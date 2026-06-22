import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RevealDirective } from './directives/reveal.directive';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RevealDirective, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
