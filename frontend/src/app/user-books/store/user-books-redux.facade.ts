import {IBooksState} from '@@app/user-books/models/books-state.model';
import {FetchBookDetail, FetchBooks} from '@@app/user-books/store/user-books.actions';
import {UserBooksSelectors} from '@@app/user-books/store/user-books.selectors';
import {IBook} from '@@share/models/book.model';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserBooksReduxFacade {

  constructor(private store: Store<{ books: IBooksState }>) {}

  books$: Observable<IBook[]> = this.store.pipe(select(UserBooksSelectors.getBooks));
  bookDetail$: Observable<IBook> = this.store.pipe(select(UserBooksSelectors.getBookDetail));

  fetchBooks() {
    this.store.dispatch(new FetchBooks());
  }

  fetchBookById(id: string) {
    this.store.dispatch(new FetchBookDetail(id));
  }

  getBooksByOwnerId$(id: string): Observable<IBook[]> {
    return this.store.pipe(select(UserBooksSelectors.getBooksByOwnerId, {id}));
  }
}
