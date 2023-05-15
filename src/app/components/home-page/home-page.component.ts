import { Component } from '@angular/core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  faLinkedin = faLinkedin;
}
