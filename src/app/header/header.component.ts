import { Component, OnInit, Input } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() sideNavBar: SideNavComponent;

  ngOnInit() {
  }
}
