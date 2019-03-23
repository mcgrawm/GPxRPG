import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GPxRPG';
  version = .2;
  statusNote = 'More UI boilerplate, two hard-coded HeroSheetComponents in PageView containers';
}
