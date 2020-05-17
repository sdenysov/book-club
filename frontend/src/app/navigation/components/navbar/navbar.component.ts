import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {combineLatest, Observable, Observer, of} from 'rxjs';
import {map, switchMap} from 'rxjs/internal/operators';
import {IUser} from '@@shared/models/user';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {INavbar} from '@@navigation/models/nav-bar.model';
import {BooksRestService} from '@@books/services/books-rest.service';
import {NavigationService} from '@@router/services/navigation.service';
import {IDropdownItem} from '@@shared/models/dropdown-item';
import {IBookSearchItem} from '@@navigation/models/book-search-item';
import {TypeaheadDirective, TypeaheadMatch} from 'ngx-bootstrap';
import {IBook} from '@@books/models/book';
import {BooksFinderReduxFacade} from '@@app/books-finder/store/books-finder-redux.facade';
import {Page} from '@@navigation/models/page';

interface ViewModel {
  user: IUser;
  navbar: INavbar;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavbarComponent implements OnInit {

  @ViewChild(TypeaheadDirective, {static: false}) bsTypeahead: TypeaheadDirective;
  public search: string;
  public vm$: Observable<ViewModel>;
  public userMenuItem: IDropdownItem[];
  public booksSuggestion$: Observable<IBookSearchItem[]>;
  public book$: Observable<IBook>;

  constructor(private booksRestService: BooksRestService,
              private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade,
              private navigationService: NavigationService,
              private booksFinderReduxFacade: BooksFinderReduxFacade) {
    this.userMenuItem = [
      {value: 'profile', label: 'Profile'},
      {value: 'myBooks', label: 'My books'},
      {value: 'newBook', label: 'New book'},
      {value: 'logout', label: 'Logout'},
    ];
  }

  ngOnInit() {
    this.vm$ = combineLatest([
      this.authReduxFacade.user$,
      this.navigationReduxFacade.navbar$
    ]).pipe(map(([user, navbar]) => ({user, navbar})));
    this.booksSuggestion$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(switchMap((query: string) => query ? this.booksRestService.suggest$(query) : of([])));
  }

  onSelect(event: TypeaheadMatch) {
    this.search = '';
    this.navigationService.goToBookDetailPage(event.item.id);
  }

  searchBooks() {
    this.booksFinderReduxFacade.fetchBooksByQuery(this.search);
    this.search = '';
    this.bsTypeahead.hide();
    if (this.navigationReduxFacade.getCurrentPage() !== Page.FIND_BOOKS) {
      this.navigationService.goToFindBooksPage({searchNavigation: true});
    }
  }

  logout() {
    this.authReduxFacade.logout();
  }

  onActionSelect(actionValue: string) {
    const user = this.authReduxFacade.getUser();
    const username = user.username;
    switch (actionValue) {
      case 'profile': {
        return this.navigationService.goToProfile(username);
      }
      case 'myBooks': {
        return this.navigationService.goToUserBooks(username);
      }
      case 'newBook': {
        return this.navigationService.goToUserNewBook(username);
      }
      case 'logout': {
        return this.logout();
      }
    }
  }
}
