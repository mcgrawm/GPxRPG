import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

  @Input() page: number;    // This pageView's page number - it will be assigned by Book
  @Input() content: object; // the JSON object containing this pageView's content (for now, only hero JSON)

  constructor() { }

  ngOnInit() {

  }

}
