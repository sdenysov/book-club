import {AppSharedModule} from '@@shared/app-shared.module';
import {NgModule} from '@angular/core';
import {FindBooksPageComponent} from '@@app/search-page/pages/find-books/find-books-page.component';
import {AppBooksModule} from '@@books/books.module';

@NgModule({
  imports: [
    AppSharedModule,
    AppBooksModule
  ],
  declarations: [
    FindBooksPageComponent
  ],
  exports: [
    FindBooksPageComponent
  ],
  providers: [],
})
export class AppSearchPageModule {}
