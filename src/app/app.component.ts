import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/css/finapp-body-sidenav-content.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'FINAPP';
}
