import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {BookModel} from '@@books-page/models/book.model';
import {BooksReduxService} from '@@books-page/services/books-redux.service';
import {BooksService} from '@@books-page/services/books.service';

@Component({
  selector: 'app-books-page-component',
  templateUrl: './books-page.component.html',
})
export class AppBooksPageComponent implements OnChanges, OnInit, OnDestroy{

  books: BookModel[];
  subsription: Subscription;

  constructor(private booksService: BooksService,
              private booksReduxService: BooksReduxService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.booksReduxService.fetchBooks();
    this.subsription = this.booksReduxService.books$.subscribe(books => {
      console.log('AppBookComponent', books);
      this.books = books;
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.subsription.unsubscribe();
  }
}
