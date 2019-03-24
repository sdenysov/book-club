import {NgModule} from '@angular/core';
import {AppBooksPageRoutingModule} from '@@app/books-page/books-page-routing.module';
import {AppBookComponent} from '@@books-page/components/book/book.component';
import {AppBooksPageComponent} from '@@books-page/components/book-page/books-page.component';
import {BooksService} from '@@books-page/services/books.service';
import {CommonModule} from '@angular/common';
import {BooksDataService} from '@@books-page/services/books-data.service';
import {environment} from '../../environments/environment.mock';
import {BooksDataServiceMock} from '@@books-page/services/books-data.service.mock';
import {BooksDataServiceImpl} from '@@books-page/services/books-data.service.impl';

@NgModule({
  imports: [
    CommonModule,
    AppBooksPageRoutingModule
  ],
  declarations: [
    AppBooksPageComponent,
    AppBookComponent
  ],
  providers: [
    BooksService
  ],
  exports: []
})
export class AppBooksPageModule {}
