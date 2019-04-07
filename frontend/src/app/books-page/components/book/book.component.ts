import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BooksService} from '@@books-page/services/books.service';
import {BooksReduxService} from '@@books-page/services/books-redux.service';
import {BookModel} from '@@books-page/models/book.model';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-book-component',
  templateUrl: './book.component.html',
})
export class AppBookComponent implements OnChanges, OnInit, OnDestroy {

  @Input() book: BookModel;

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
