import {NgModule} from '@angular/core';
import {AppBooksPageRoutingModule} from '@@app/books-page/books-page-routing.module';
import {AppBookComponent} from '@@books-page/components/book/book.component';
import {AppBooksPageComponent} from '@@books-page/components/book-page/books-page.component';

@NgModule({
  imports: [
    AppBooksPageRoutingModule
  ],
  declarations: [
    AppBooksPageComponent,
    AppBookComponent
  ],
  exports: []
})
export class AppBooksPageModule {}
