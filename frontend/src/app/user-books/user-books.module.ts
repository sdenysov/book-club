import {BookDetailsPageComponent} from '@@app/user-books/pages/details/book-details-page.component';
import {EditBookPageComponent} from '@@app/user-books/pages/edit/edit-book-page.component';
import {NewBookPageComponent} from '@@app/user-books/pages/new/new-book-page.component';
import {UserBooksPageComponent} from '@@app/user-books/pages/user-books/user-books-page.component';
import {UserBookEffects} from '@@app/user-books/store/user-book.effects';
import {userBooksReducer} from '@@app/user-books/store/user-books.reducer';
import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

export const USER_BOOKS_STORE_KEY = 'user-books';

@NgModule({
  imports: [
    AppShareModule,
    StoreModule.forFeature(USER_BOOKS_STORE_KEY, userBooksReducer),
    EffectsModule.forFeature([UserBookEffects])
  ],
  declarations: [
    UserBooksPageComponent,
    EditBookPageComponent,
    BookDetailsPageComponent,
    NewBookPageComponent
  ],
  exports: []
})
export class AppUserBooksModule {}
