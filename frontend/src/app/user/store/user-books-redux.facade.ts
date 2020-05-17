import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {BooksState} from '@@user/models/books-state.model';
import {UserBooksSelectors} from '@@user/store/user-books.selectors';
import {IBook} from '@@books/models/book';
import {UserBooksActions} from '@@user/store/user-books.actions';

@Injectable({providedIn: 'root'})
export class UserBooksReduxFacade {

  constructor(private store: Store<{ books: BooksState }>) {}

  books$: Observable<IBook[]> = this.store.pipe(select(UserBooksSelectors.getBooks));

  fetchBooks(username: string) {
    this.store.dispatch(UserBooksActions.fetchBooks({username}));
  }

  fetchBookById(id: string) {
    this.store.pipe(select(UserBooksSelectors.getBookById, {id}));
  }

  getBooksByOwnerId$(id: string): Observable<IBook[]> {
    return this.store.pipe(select(UserBooksSelectors.getBooksByOwnerId, {id}));
  }
}
