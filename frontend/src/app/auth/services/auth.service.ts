import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Page} from '@@navigation/models/page';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {IUser} from '@@share/models/user.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, first, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {

  redirectUrl: string;
  loggedInUser$: Observable<IUser>;
  isLoggedIn$: Observable<boolean>;
  private readonly authOnlyAccessPages = new Set<Page>([
    Page.BOOKS,
    Page.EDIT_PROFILE,
    Page.BOOK_DETAILS,
    Page.PROFILE_SETTING
  ]);

  constructor(private routerService: RouterService,
              private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade) {
    this.loggedInUser$ = authReduxFacade.authState$.pipe(
      filter(userData => userData.loggedInUserLoaded),
      map(userData => userData.loggedInUser)
    );
    this.isLoggedIn$ = this.loggedInUser$.pipe(
      map(loggedInUser => Boolean(loggedInUser))
    );
  }

  redirectOnSuccessLogin() {
    if (this.redirectUrl) {
      this.routerService.goTo(this.redirectUrl);
    } else {
      this.routerService.goToMainPage();
    }
  }

  redirectOnSuccessLogout() {
    this.navigationReduxFacade.currentPage$.pipe(first()).subscribe(currentPage => {
      if (this.authOnlyAccessPages.has(currentPage)) {
        this.routerService.goToMainPage();
      }
    });
  }
}

