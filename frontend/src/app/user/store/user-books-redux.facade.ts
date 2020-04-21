import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {BooksState} from '@@user/models/books-state.model';
import {UserBooksSelectors} from '@@user/store/user-books.selectors';
import {IBook} from '@@books/models/book';
import {FetchBookDetail, FetchBooks} from '@@user/store/user-books.actions';

@Injectable({providedIn: 'root'})
export class UserBooksReduxFacade {

  constructor(private store: Store<{ books: BooksState }>) {}

  books$: Observable<IBook[]> = this.store.pipe(select(UserBooksSelectors.getBooks));
  bookDetail$: Observable<IBook> = this.store.pipe(select(UserBooksSelectors.getBookDetail));

  fetchBooks(userName: string) {
    this.store.dispatch(new FetchBooks(userName));
  }

  fetchBookById(id: string) {
    this.store.dispatch(new FetchBookDetail(id));
  }

  getBooksByOwnerId$(id: string): Observable<IBook[]> {
    return this.store.pipe(select(UserBooksSelectors.getBooksByOwnerId, {id}));
  }
}
