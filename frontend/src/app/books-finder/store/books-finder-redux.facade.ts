import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {BooksState} from '@@user/models/books-state.model';
import {IBook} from '@@books/models/book';
import {BooksFinderActions} from '@@app/books-finder/store/books-finder.actions';
import {BooksFinderSelectors} from '@@app/books-finder/store/books-finder.selectors';

@Injectable({providedIn: 'root'})
export class BooksFinderReduxFacade {

  constructor(private store: Store<{ books: BooksState }>) {}

  books$: Observable<IBook[]> = this.store.pipe(select(BooksFinderSelectors.getAllBooks));

  fetchAllBooks() {
    this.store.dispatch(BooksFinderActions.fetchBooks());
  }

  fetchBooksByQuery(query: string) {
    this.store.dispatch(BooksFinderActions.searchBooks({query}));
  }
}
