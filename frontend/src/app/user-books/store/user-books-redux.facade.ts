import {BooksState} from '@@app/user-books/models/books-state.model';
import {FetchBookDetail, FetchBooks} from '@@app/user-books/store/user-books.actions';
import {UserBooksSelectors} from '@@app/user-books/store/user-books.selectors';
import {Book} from '@@share/models/book';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserBooksReduxFacade {

  constructor(private store: Store<{ books: BooksState }>) {}

  books$: Observable<Book[]> = this.store.pipe(select(UserBooksSelectors.getBooks));
  bookDetail$: Observable<Book> = this.store.pipe(select(UserBooksSelectors.getBookDetail));

  fetchBooks() {
    this.store.dispatch(new FetchBooks());
  }

  fetchBookById(id: string) {
    this.store.dispatch(new FetchBookDetail(id));
  }

  getBooksByOwnerId$(id: string): Observable<Book[]> {
    return this.store.pipe(select(UserBooksSelectors.getBooksByOwnerId, {id}));
  }
}
