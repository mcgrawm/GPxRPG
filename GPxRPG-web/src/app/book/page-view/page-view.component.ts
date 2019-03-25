import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

  @Input() navBtnLabel: string;
  @Input() navBtnDirection: number;     // what direction does the page's nav button go? back (-1) or forward (1)?

  page: number;       // This pageView's page number - it will be assigned by Book
  content: object;    // the JSON object containing this pageView's content (for now, only hero JSON)
  navBtnEnabled: boolean;
  displayContent: boolean;

  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  setPage(page: number, navBtnEnabled: boolean, displayContent: boolean, content: object ) {
    this.page = page;
    this.navBtnEnabled = navBtnEnabled;
    this.displayContent = displayContent;
    this.content = content;
  }

  onPageChanged() {
    this.pageChanged.emit(+this.navBtnDirection); // using a unary plus operator to force naBtnDirection to number type
  }

}
