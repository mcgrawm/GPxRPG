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
    this.pageView0.page = this.currentPage;
    this.pageView1.page = this.currentPage + 1;

    // Subscribe to the bookService's loadData Observable, which should return an array of hero objects. 
    // Set the pageViews' content (for now, to the 1st and 2nd hero in the stack) once this data is returned.
    this.bookService.loadData().subscribe(
      (data) => {
          this.bookService.heroes = data.heroes;
          console.log(this.bookService.heroes);
          this.pageView0.content = this.bookService.heroes[0];
          this.pageView1.content = this.bookService.heroes[1];
      }
    );


   }



}
