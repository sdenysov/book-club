import {select, Store} from '@ngrx/store';
import {BooksStateModel} from '@@books/models/books-state.model';
import {Injectable} from '@angular/core';
import {FetchBookDetail, FetchBooks} from '@@books/store/books.actions';
import {BooksSelectors} from '@@books/store/books.selectors';
import {Observable} from 'rxjs/index';
import {BookModel} from '@@share/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksReduxService {

  constructor(private store: Store<{ books: BooksStateModel }>) {}

  books$: Observable<BookModel[]> = this.store.pipe(select(BooksSelectors.getBooks));
  bookDetail$: Observable<BookModel> = this.store.pipe(select(BooksSelectors.getBookDetail));

  fetchBooks() {
    this.store.dispatch(new FetchBooks());
  }

  fetchBookById(id: string) {
    this.store.dispatch(new FetchBookDetail(id));
  }

  getBooksByOwnerId$(id: string): Observable<BookModel[]> {
    //TODO What if id is null?
    return this.store.pipe(select(BooksSelectors.getBooksByOwnerId(id)));
  }
}
