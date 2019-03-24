import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/model/Hero.model';

@Component({
  selector: 'app-hero-sheet',
  templateUrl: './hero-sheet.component.html',
  styleUrls: ['./hero-sheet.component.css']
})
export class HeroSheetComponent implements OnInit {

  @Input() hero: object;

  getName() {
    return this.hero.name;
  }

  constructor() { }

  ngOnInit() { }

}
