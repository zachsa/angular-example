import { Component } from '@angular/core';
import { fadeAnimation } from './animations'

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'angular-app'
}
