import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @ViewChild('pageView0') pageView0;
  @ViewChild('pageView1') pageView1;

  currentPage;  // current page the Book is opened to

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.currentPage = 0;   // set page to first page on init (for now), then inform both pageViews what their page numbers are
    const _this = this;     // a hack until I can fix the scope problem in the observable's callback

    // Subscribe to the bookService's loadData Observable, which should return an array of hero objects. 
    // Set the pageViews' content (for now, to the 1st and 2nd hero in the stack) once this data is returned.
    this.bookService.loadData().subscribe(
      (data) => {
        console.log("data returned " + data);
        this.bookService.heroes = data.heroes;
        console.log(this.bookService.heroes);
        setPageViews();
      }
    );

    // TODO: I've got a scope problem here, need to read up on how to invoke setPageViews in a 'this' context...
    // For now, have hacked around it by defining _this = this

    function setPageViews() {
      console.log("setPageViews " + _this );

      // pageView0
      const backBtnEnabled = (_this.currentPage > 0 ? true : false);

      _this.pageView0.setPage (
        _this.currentPage,
        backBtnEnabled,
        true,
        _this.bookService.heroes[_this.currentPage]
      );

      // pageView1
      const nextBtnEnabled = (_this.currentPage < _this.bookService.heroes.length -1 ? true : false);
      const displayLeftPageContent = (_this.currentPage < _this.bookService.heroes.length - 1 ? true : false);
      let leftPageContent = {};

      if (_this.currentPage < _this.bookService.heroes.length - 1) {
        leftPageContent = _this.bookService.heroes[_this.currentPage + 1];
      }

      _this.pageView1.setPage (
        _this.currentPage + 1,
        nextBtnEnabled,
        displayLeftPageContent,
        leftPageContent
      );

    }

    function onPageChange(pageOffset: number) {
      const newPage = this.currentPage + pageOffset;
      if(newPage >= 0 && newPage < this.heroes.length) {
        this.currentPage = newPage;
        this.setPageViews();
      } else {
        // tried to navigate to a non-existent page; for now, do nothing
      }
    }


   }



}
