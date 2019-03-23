import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-sheet',
  templateUrl: './hero-sheet.component.html',
  styleUrls: ['./hero-sheet.component.css']
})
export class HeroSheetComponent implements OnInit {

  @Input() hero: object;

  constructor() { }

  ngOnInit() { }

}
