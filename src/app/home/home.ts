import { Component } from '@angular/core';
import { Banner } from '../banner/banner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Banner],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
