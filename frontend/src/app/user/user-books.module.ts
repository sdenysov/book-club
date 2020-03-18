import {AppSharedModule} from '@@shared/app-shared.module';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {USER_BOOKS_STORE_KEY} from '@@user/store/user-books-store.properties';
import {userBooksReducer} from '@@user/store/user-books.reducer';
import {UserBookEffects} from '@@user/store/user-book.effects';
import {UserBooksPageComponent} from '@@user/pages/user-books/user-books-page.component';
import {EditBookPageComponent} from '@@user/pages/edit/edit-book-page.component';
import {BookDetailsPageComponent} from '@@user/pages/details/book-details-page.component';
import {NewBookPageComponent} from '@@user/pages/new/new-book-page.component';
import {AppBooksModule} from '@@books/books.module';

@NgModule({
  imports: [
    AppSharedModule,
    AppBooksModule,
    StoreModule.forFeature(USER_BOOKS_STORE_KEY, userBooksReducer),
    EffectsModule.forFeature([UserBookEffects])
  ],
  declarations: [
    UserBooksPageComponent,
    EditBookPageComponent,
    BookDetailsPageComponent,
    NewBookPageComponent,
  ],
  exports: []
})
export class AppUserModule {}
