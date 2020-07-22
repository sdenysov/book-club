import {NgModule} from '@angular/core';
import {BookComponent} from '@@books/components/book/book.component';
import {BookActionsComponent} from '@@books/components/books-actions/book-actions.component';
import {AppEditBookComponent} from '@@books/components/edit-book/edit-book.component';
import {AppBookDetailsComponent} from '@@books/components/book-details/book-details.component';
import {AppNewBookComponent} from '@@books/components/new-book/new-book.component';
import {UserBookComponent} from '@@books/components/user-book/user-book.component';
import {AppSharedModule} from '@@shared/app-shared.module';
import {BookFinderComponent} from '@@books/components/book-finder/book-finder.component';
import {BookDetailsPageComponent} from '@@books/pages/book-detail/book-details-page.component';
import {StoreModule} from '@ngrx/store';
import {booksReducer} from '@@books/store/books.reducer';
import {BOOKS_STORE_KEY} from '@@books/store';
import {EffectsModule} from '@ngrx/effects';
import {BooksEffects} from '@@books/store/books.effects';
import {CoreModule} from '@@core/core.module';

const SHARED_DECLARATIONS = [
  BookComponent,
  BookActionsComponent,
  AppEditBookComponent,
  AppBookDetailsComponent,
  AppNewBookComponent,
  UserBookComponent,
  BookFinderComponent,
  BookDetailsPageComponent
];

@NgModule({
  imports: [
    CoreModule,
    AppSharedModule,
    StoreModule.forFeature(BOOKS_STORE_KEY, booksReducer),
    EffectsModule.forFeature([BooksEffects])
  ],
  declarations: SHARED_DECLARATIONS,
  exports: SHARED_DECLARATIONS
})
export class AppBooksModule {}
