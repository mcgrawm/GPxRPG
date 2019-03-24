import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GPxRPG';
  version = .4;
  statusNote = 'Real data coming from github via BookService > BookComponent > PageView > HeroSheet';
}
