import {AuthService} from '@@auth/services/auth.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/internal/operators';
import {IUser} from '@@share/models/user';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {INavbar} from '@@navigation/models/nav-bar.model';

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

  vm$: Observable<ViewModel>;

  constructor(private booksRestService: BooksRestService,
              private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade) {
  }

  inputChange$: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.vm$ = combineLatest([
      this.authReduxFacade.loggedInUser$,
      this.navigationReduxFacade.navbar$
    ]).pipe(map(([user, navbar]) => ({user, navbar})));

    this.inputChange$.pipe(
      filter(query => query.length > 2),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(query => {
      this.booksRestService.suggest$(query);
    });
  }

  logout() {
    this.authReduxFacade.logout();
  }
}
