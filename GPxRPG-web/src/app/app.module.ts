import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { PageViewComponent } from './book/page-view/page-view.component';
import { HeroSheetComponent } from './book/page-view/hero-sheet/hero-sheet.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PageViewComponent,
    HeroSheetComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
