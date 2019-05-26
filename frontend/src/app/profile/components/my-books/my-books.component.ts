import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {BookModel} from '@@share/models/book.model';
import {UserBooksService} from '@@app/profile/services/user-books.servcie';
import {UserBooksReduxService} from '@@app/profile/services/user-books-redux.service';

@Component({
  selector: 'app-my-books-component',
  templateUrl: './my-books.component.html',
})
export class AppMyBooksComponent implements OnInit {

  books$: Observable<BookModel[]> = this.userBooksReduxService.books$;

  constructor(private userBooksReduxService: UserBooksReduxService,
              private userBooksService: UserBooksService) {
  }

  ngOnInit() {
    this.userBooksService.fetchUserBooks();
  }

  trackByBooks(index: number, book: BookModel) {
    return book.id;
  }
}
