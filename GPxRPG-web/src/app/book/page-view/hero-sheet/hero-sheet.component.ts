import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-sheet',
  templateUrl: './hero-sheet.component.html',
  styleUrls: ['./hero-sheet.component.css']
})
export class HeroSheetComponent implements OnInit {

  @Input() hero: object;

  getName() {
// tslint:disable-next-line: no-string-literal
    return this.hero['name'];
  }

  getImgURL() {
    // tslint:disable-next-line: no-string-literal
        return this.hero['imgURL'];
  }

  getImgTrim() {
    // tslint:disable-next-line: no-string-literal
        return this.hero['imgTrim'];
  }

  getQualities() {
    let qString = '';
// tslint:disable-next-line: no-string-literal
    for(const quality of this.hero['qualities']) {
      qString = qString + (quality + ', ');
    }
    return qString.substr(0, qString.length - 2);
  }
  constructor() { }

  ngOnInit() { }

}
