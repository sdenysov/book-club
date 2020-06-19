import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IBook} from '@@books/models/book';
import {IBooksState} from '@@books/models/books-state';
import {BooksSelectors} from '@@books/store/books.selectors';
import {BooksActions} from '@@books/store/books.actions';

@Injectable({providedIn: 'root'})
export class BooksReduxFacade {

  constructor(private store: Store<{ books: IBooksState }>) {}

  state$: Observable<IBooksState> = this.store.pipe(select(BooksSelectors.getState));
  book$: Observable<IBook> = this.store.pipe(select(BooksSelectors.getBook));
  loaded$: Observable<boolean> = this.store.pipe(select(BooksSelectors.loaded));

  fetchBook(id: string) {
    this.store.dispatch(BooksActions.fetchBook({id}));
  }
}
