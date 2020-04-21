import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {TranslateService} from '@ngx-translate/core';
import {UserBooksReduxFacade} from '@@user/store/user-books-redux.facade';
import {IBook} from '@@books/models/book';
import {first} from 'rxjs/operators';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';

@Component({
  templateUrl: 'user-books-page.component.html',
  styleUrls: ['user-books-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBooksPageComponent implements OnInit {

  public caption: string;

  @Input()
  public books$: Observable<IBook[]> = this.userBooksReduxFacade.books$;

  constructor(private userBooksReduxFacade: UserBooksReduxFacade,
              private routerReduxFacade: RouterReduxFacade,
              private translateService: TranslateService,
              private authReduxFacade: AuthReduxFacade,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    const username = this.routerReduxFacade.getUsername();
    this.translateService.get('books.booksSectionTitle')
      .pipe(first())
      .subscribe(sectionCaption => {
        this.caption = `${username} > ${sectionCaption}`;
        this.cdr.detectChanges();
      });
    this.userBooksReduxFacade.fetchBooks(username);
  }

  trackByBooks(index: number, book: IBook) {
    return book.id;
  }
}
