import { Component } from '@angular/core';
import { Banner } from '../banner/banner';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [Banner],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {}
