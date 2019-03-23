import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GPxRPG';
  version = .3;
  statusNote = 'Dummy data propagating down from BookService > BookComponent > PageView > HeroSheet ';
}
