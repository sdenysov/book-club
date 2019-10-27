import {BookComponent} from '@@app/search-page/components/book/book.component';
import {SearchBookPageComponent} from '@@app/search-page/pages/search-book/search-book-page.component';
import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    AppShareModule
  ],
  declarations: [
    BookComponent,
    SearchBookPageComponent
  ],
  exports: [
    SearchBookPageComponent
  ],
  providers: [],
})
export class AppSearchPageModule {}
