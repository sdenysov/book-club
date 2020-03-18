import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '@@shared/models/user';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {TranslateService} from '@ngx-translate/core';
import {UserBooksReduxFacade} from '@@user/store/user-books-redux.facade';
import {IBook} from '@@books/models/book';

@Component({
  templateUrl: 'user-books-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBooksPageComponent implements OnInit {

  @Input()
  public books$: Observable<IBook[]> = this.booksReduxFacade.books$;
  public user: IUser = this.authReduxFacade.getUser();
  public caption: string;

  constructor(private booksReduxFacade: UserBooksReduxFacade,
              private translateService: TranslateService,
              private authReduxFacade: AuthReduxFacade) {
    this.caption = `${this.user.username} > ${this.translateService.instant('books.booksSectionTitle')}`;
  }

  ngOnInit() {
    this.booksReduxFacade.fetchBooks();
  }

  trackByBooks(index: number, book: IBook) {
    return book.id;
  }
}
