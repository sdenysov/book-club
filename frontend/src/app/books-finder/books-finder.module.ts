import {AppSharedModule} from '@@shared/app-shared.module';
import {NgModule} from '@angular/core';
import {FindBooksPageComponent} from '@@app/books-finder/pages/find-books/find-books-page.component';
import {AppBooksModule} from '@@books/books.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BOOKS_FINDER_STORE_KEY} from '@@app/books-finder/store/books-finder-store.properties';
import {BooksFinderEffects} from '@@app/books-finder/store/books-finder.effects';
import {booksFinderReducer} from '@@app/books-finder/store/books-finder.reducer';

@NgModule({
  imports: [
    AppSharedModule,
    AppBooksModule,
    StoreModule.forFeature(BOOKS_FINDER_STORE_KEY, booksFinderReducer),
    EffectsModule.forFeature([BooksFinderEffects])
  ],
  declarations: [
    FindBooksPageComponent
  ],
  exports: [
    FindBooksPageComponent
  ],
  providers: [],
})
export class AppBooksFinderModule {}
