import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {IBook} from '@@share/models/book.model';
import {ProfileBooksService} from '@@app/profile/services/profile-books.service';
import {ProfileBooksReduxService} from '@@app/profile/services/profile-books-redux.service';

@Component({
  selector: 'app-my-books-component',
  templateUrl: './my-books.component.html',
})
export class AppMyBooksComponent implements OnInit {

  books$: Observable<IBook[]> = this.profileBooksReduxService.books$;

  constructor(private profileBooksReduxService: ProfileBooksReduxService,
              private profileBooksService: ProfileBooksService) {
  }

  ngOnInit() {
    this.profileBooksService.fetchProfileBooks();
  }

  trackByBooks(index: number, book: IBook) {
    return book.id;
  }
}
