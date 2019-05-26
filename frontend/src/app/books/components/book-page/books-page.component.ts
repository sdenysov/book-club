import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {BooksReduxService} from '@@books/services/books-redux.service';
import {BooksService} from '@@books/services/books.service';
import {BookModel} from '@@share/models/book.model';

@Component({
  selector: 'app-books-page-component',
  templateUrl: './books-page.component.html',
})
export class AppBooksPageComponent implements OnInit {

  books$: Observable<BookModel[]> = this.booksReduxService.books$;

  constructor(private booksService: BooksService,
              private booksReduxService: BooksReduxService) {
  }

  ngOnInit() {
    this.booksReduxService.fetchBooks();
  }

  trackByBooks(index: number, book: BookModel) {
    return book.id;
  }
}
