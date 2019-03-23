import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { PageViewComponent } from './book/page-view/page-view.component';
import { HeroSheetComponent } from './book/page-view/hero-sheet/hero-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PageViewComponent,
    HeroSheetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
