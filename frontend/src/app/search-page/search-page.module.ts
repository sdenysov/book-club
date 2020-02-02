import {BookComponent} from '@@app/search-page/components/book/book.component';
import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';
import {FindBooksPageComponent} from '@@app/search-page/pages/find-books/find-books-page.component';

@NgModule({
  imports: [
    AppShareModule
  ],
  declarations: [
    BookComponent,
    FindBooksPageComponent
  ],
  exports: [
    FindBooksPageComponent
  ],
  providers: [],
})
export class AppSearchPageModule {}
