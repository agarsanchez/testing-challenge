import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-list/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    BookListComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
