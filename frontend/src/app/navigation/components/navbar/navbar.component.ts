import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {combineLatest, concat, Observable, Observer, of, Subject} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  filter,
  map, switchMap,
  tap
} from 'rxjs/internal/operators';
import {IUser} from '@@shared/models/user';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {INavbar} from '@@navigation/models/nav-bar.model';
import {BooksRestService} from '@@books/services/books-rest.service';
import {RouterService} from '@@router/services/router.service';
import {IDropdownItem} from '@@shared/models/dropdown-item';
import {IBookSearchItem} from '@@navigation/models/book-search-item';
import {BsDropdownDirective, TypeaheadDirective, TypeaheadMatch} from 'ngx-bootstrap';

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

  constructor(private booksRestService: BooksRestService,
              private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade,
              private routerService: RouterService) {
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
    console.log('query:', event.item.id);
    this.search = '';
  }

  searchBooks() {
    console.log('search: ', this.search);
    this.search = '';
    this.bsTypeahead.hide();
  }

  logout() {
    this.authReduxFacade.logout();
  }

  onActionSelect(actionValue: string) {
    const user = this.authReduxFacade.getUser();
    const username = user.username;
    switch (actionValue) {
      case 'profile': {
        return this.routerService.goToProfile(username);
      }
      case 'myBooks': {
        return this.routerService.goToUserBooks(username);
      }
      case 'newBook': {
        return this.routerService.goToUserNewBook(username);
      }
      case 'logout': {
        return this.logout();
      }
    }
  }
}
