import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/internal/operators';
import {IUser} from '@@shared/models/user';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {INavbar} from '@@navigation/models/nav-bar.model';
import {BooksRestService} from '@@books/services/books-rest.service';

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
      this.authReduxFacade.user$,
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
