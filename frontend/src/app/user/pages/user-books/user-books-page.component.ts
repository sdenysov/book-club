import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '@@shared/models/user';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {TranslateService} from '@ngx-translate/core';
import {UserBooksReduxFacade} from '@@user/store/user-books-redux.facade';
import {IBook} from '@@books/models/book';
import {first} from 'rxjs/operators';

@Component({
  templateUrl: 'user-books-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBooksPageComponent implements OnInit {

  public user: IUser = this.authReduxFacade.getUser();
  public caption: string;

  @Input()
  public books$: Observable<IBook[]> = this.booksReduxFacade.books$;

  constructor(private booksReduxFacade: UserBooksReduxFacade,
              private translateService: TranslateService,
              private authReduxFacade: AuthReduxFacade,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.translateService.get('books.booksSectionTitle')
      .pipe(first())
      .subscribe(sectionCaption => {
        this.caption = `${this.user.username} > ${sectionCaption}`;
        this.cdr.detectChanges();
      });
    this.booksReduxFacade.fetchBooks();
  }

  trackByBooks(index: number, book: IBook) {
    return book.id;
  }
}
