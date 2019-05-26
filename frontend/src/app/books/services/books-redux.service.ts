import {select, Store} from '@ngrx/store';
import {BooksStateModel} from '@@books/models/books-state.model';
import {Injectable} from '@angular/core';
import {FetchBooks} from '@@books/store/books.actions';
import {getBookById, getBooks, getBooksByOwnerId} from '@@books/store/books.selectors';
import {Observable} from 'rxjs/index';
import {BookModel} from '@@share/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksReduxService {

  constructor(private store: Store<{ books: BooksStateModel }>) {}

  books$: Observable<BookModel[]> = this.store.pipe(select(getBooks));

  fetchBooks() {
    this.store.dispatch(new FetchBooks());
  }

  getBookById$(id: number): Observable<BookModel> {
    return this.store.pipe(select(getBookById(id)));
  }

  getBooksByOwnerId$(id: number): Observable<BookModel[]> {
    //TODO What if id is null?
    return this.store.pipe(select(getBooksByOwnerId(id)));
  }
}
