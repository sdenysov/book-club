import {NgModule} from '@angular/core';
import {AppBookComponent} from '@@books/components/book/book.component';
import {AppBooksPageComponent} from '@@books/components/book-page/books-page.component';
import {StoreModule} from '@ngrx/store';
import {booksReducer} from '@@books/store/books.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from '@@books/store/book.effects';
import {AppBookDetailComponent} from '@@books/components/book-detail/book-detail.component';
import {ShareModule} from '@@share/share.module';
import {AppBooksRoutingModule} from '@@app/books/books-routing.module';
import {UserService} from '@@user/services/user.service';

@NgModule({
  imports: [
    ShareModule,
    AppBooksRoutingModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BookEffects])
  ],
  declarations: [
    AppBooksPageComponent,
    AppBookComponent,
    AppBookDetailComponent
  ],
  exports: []
})
export class AppBooksModule {

  constructor(private userService: UserService) {
    this.userService.init();
  }
}
