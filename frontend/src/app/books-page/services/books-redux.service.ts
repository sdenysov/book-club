import {select, Store} from '@ngrx/store';
import {BooksStateModel} from '@@books-page/models/books-state.model';
import {Injectable} from '@angular/core';
import {FetchBooks} from '@@books-page/store/books.actions';
import {getBooks} from '@@books-page/store/books.selectors';
import {getBookById} from '@@books-page/store/books.selectors';
import {Observable} from 'rxjs/index';
import {BookModel} from '@@books-page/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksReduxService {

  constructor(private store: Store<{ books: BooksStateModel }>) {}

  books$: Observable<BookModel[]> = this.store.pipe(select(getBooks));

  fetchBooks() {
    this.store.dispatch(new FetchBooks());
  };

  getBookById(id) {
    return this.store.pipe(select(getBookById(id)));
  }
}
