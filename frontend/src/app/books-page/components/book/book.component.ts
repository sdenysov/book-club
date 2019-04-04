import {Component} from '@angular/core';
import {BooksDataService} from '@@books-page/services/books-data.service';
import {BookModel} from '@@books-page/models/book.model';
import {Store} from '@ngrx/store';
import {BooksStateModel} from '@@books-page/models/books-state.model';
import {FetchBooksSucceed} from '@@books-page/store/books.actions';
import {BooksService} from '@@books-page/services/books.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book.component.html',
})
export class AppBookComponent {
  constructor(private booksService: BooksService, private store: Store<{books: BooksStateModel}>) {
    const books = [];
    store.dispatch(new FetchBooksSucceed(books));
}}
