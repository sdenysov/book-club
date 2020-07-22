import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {IBook} from '@@books/models/book';
import {Subject} from 'rxjs';
import {BooksReduxFacade} from '@@books/store/books-redux.facade';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {takeUntil} from 'rxjs/operators';
import {IBooksState} from '@@books/models/books-state';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {IUser} from '@@shared/models/user';
import {NavigationService} from '@@router/services/navigation.service';
import {BooksRestService} from '@@books/services/books-rest.service';

interface ViewModel {
  loaded: boolean;
  book: IBook;
}

@Component({
  selector: 'app-book-details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBookDetailsComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void>;
  public vm: Partial<ViewModel>;
  public user: IUser;

  constructor(private routerReduxFacade: RouterReduxFacade,
              private booksReduxFacade: BooksReduxFacade,
              private booksRestService: BooksRestService,
              private cdr: ChangeDetectorRef,
              private authReduxFacade: AuthReduxFacade,
              private navigationService: NavigationService) {
    this.unsubscribe$ = new Subject();
    this.vm = {};
  }

  ngOnInit() {
    const bookId: string = this.routerReduxFacade.getBookId();
    this.booksReduxFacade.fetchBook(bookId);
    this.booksReduxFacade.state$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state: IBooksState) => {
        this.vm = {
          loaded: state.loaded,
          book: {...state.bookDetails}
        };
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  editBook() {
    const user: IUser = this.authReduxFacade.getUser();
    this.navigationService.goToEditBookPage(user.username, this.vm.book.id);
  }

  deleteBook() {
    this.booksRestService.deleteBook$(this.vm.book.id).subscribe(() => this.navigationService.goToFindBooksPage({}));
  }
}
