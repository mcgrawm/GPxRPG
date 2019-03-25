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

  currentPage:number = 0;  // current page the Book is opened to

  constructor(private bookService: BookService) { }



  ngOnInit() {
    this.currentPage = 0;   // set page to first page on init (for now), then inform both pageViews what their page numbers are

    // Subscribe to the bookService's loadData Observable, which should return an array of hero objects. 
    // Set the pageViews' content (for now, to the 1st and 2nd hero in the stack) once this data is returned.
    this.bookService.loadData().subscribe(
      (data) => {
        // tslint:disable-next-line: no-string-literal
        this.bookService.heroes = data['heroes'];
        console.log(this.bookService.heroes);   // TODO bookservice should update its own heroes array - call subscribe from service?
        this.setPageViews();  // call setPageViews within the proper (outer) context
      }
    );

   }

   setPageViews() {

    // pageView0
    const backBtnEnabled = (this.currentPage > 0 ? true : false);

    this.pageView0.setPage (
      this.currentPage,
      backBtnEnabled,
      true,
      this.bookService.heroes[this.currentPage]
    );

    // pageView1
    const nextBtnEnabled = (this.currentPage < this.bookService.heroes.length -1 ? true : false);
    const displayLeftPageContent = (this.currentPage < this.bookService.heroes.length - 1 ? true : false);
    let leftPageContent = {};

    if (this.currentPage < this.bookService.heroes.length - 1) {
      leftPageContent = this.bookService.heroes[this.currentPage + 1];
    }

    this.pageView1.setPage (
      this.currentPage + 1,
      nextBtnEnabled,
      displayLeftPageContent,
      leftPageContent
    );

  }

   onPageChange(pageOffset: number) {
    const newPage = this.currentPage + pageOffset; // unary operator to force both to numbers.
    if(newPage >= 0 && newPage < this.bookService.heroes.length) {
      this.currentPage = newPage;
      this.setPageViews();
    } else {
      // tried to navigate to a non-existent page; for now, do nothing
    }
  }



}
