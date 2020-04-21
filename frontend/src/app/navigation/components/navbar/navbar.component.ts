import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {combineLatest, concat, Observable, Subject} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  filter,
  map,
  tap
} from 'rxjs/internal/operators';
import {IUser} from '@@shared/models/user';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {INavbar} from '@@navigation/models/nav-bar.model';
import {BooksRestService} from '@@books/services/books-rest.service';
import {RouterService} from '@@router/services/router.service';
import {IDropdownItem} from '@@shared/models/dropdown-item';

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

  public vm$: Observable<ViewModel>;
  public inputChange$: Subject<string>;
  public userMenuItem: IDropdownItem[];
  public booksSuggestion$: Observable<string[]>;

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
    this.inputChange$ = new Subject<string>();
  }

  ngOnInit() {
    this.vm$ = combineLatest([
      this.authReduxFacade.user$,
      this.navigationReduxFacade.navbar$
    ]).pipe(map(([user, navbar]) => ({user, navbar})));

    this.booksSuggestion$ = this.inputChange$.pipe(
      tap(() => console.log('1')),
      // filter(query => query.length > 2),
      debounceTime(1000),
      tap(() => console.log('3')),
      distinctUntilChanged(),
      tap(() => console.log('4')),
      exhaustMap(query => this.booksRestService.suggest$(query)),
      tap(suggestions => console.log(suggestions))
    );
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
