import {NgModule} from '@angular/core';
import {BookComponent} from '@@books/components/book/book.component';
import {BookActionsComponent} from '@@books/components/books-actions/book-actions.component';
import {AppEditBookComponent} from '@@books/components/edit-book/edit-book.component';
import {AppMyBookComponent} from '@@books/components/my-book/my-book.component';
import {AppMyBooksComponent} from '@@books/components/my-books/my-books.component';
import {AppNewBookComponent} from '@@books/components/new-book/new-book.component';
import {UserBookComponent} from '@@books/components/user-book/user-book.component';
import {AppSharedModule} from '@@shared/app-shared.module';

const SHARED_DECLARATIONS = [
  BookComponent,
  BookActionsComponent,
  AppEditBookComponent,
  AppMyBookComponent,
  AppMyBooksComponent,
  AppNewBookComponent,
  UserBookComponent
];

@NgModule({
  imports: [AppSharedModule],
  declarations: SHARED_DECLARATIONS,
  exports: SHARED_DECLARATIONS
})
export class AppBooksModule {}
