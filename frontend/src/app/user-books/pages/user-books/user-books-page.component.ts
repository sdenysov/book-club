import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IBook} from '@@share/models/book';
import {IUser} from '@@share/models/user';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {UserBooksReduxFacade} from '@@app/user-books/store/user-books-redux.facade';

@Component({
  templateUrl: 'user-books-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBooksPageComponent implements OnInit {

  public books$: Observable<IBook[]> = this.booksReduxFacade.books$;
  public user: IUser = this.authReduxFacade.getUser();

  constructor(private booksReduxFacade: UserBooksReduxFacade,
              private authReduxFacade: AuthReduxFacade) {
  }

  ngOnInit() {
    this.booksReduxFacade.fetchBooks();
  }

  trackByBooks(index: number, book: IBook) {
    return book.id;
  }
}
