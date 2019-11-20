import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {IUser} from '@@share/models/user';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Page} from '@@navigation/models/page';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';

@Injectable({providedIn: 'root'})
export class AuthService {

  loginSuccessRedirectUrl: string;

  isLoggedIn$: Observable<boolean> = this.authReduxFacade.authState$.pipe(
    filter(authState => !authState.pending),
    map(authState => Boolean(authState.loggedInUser))
  );

  constructor(private routerService: RouterService,
              private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade) {
  }

  getLoggedInUser$(): Observable<IUser> {
    return this.authReduxFacade.authState$.pipe(
      filter(userData => userData.pending),
      map(userData => userData.loggedInUser)
    );
  }

  redirectOnSuccessLogin() {
    if (this.loginSuccessRedirectUrl) {
      this.routerService.goTo(this.loginSuccessRedirectUrl);
    } else {
      this.routerService.goToMainPage();
    }
  }

  redirectOnSuccessLogout() {
    const logoutPages = [
      Page.EDIT_BOOK,
      Page.NEW_BOOK,
      Page.EDIT_PROFILE,
      Page.PROFILE_SETTINGS
    ];
    return this.navigationReduxFacade.currentPage$.pipe(
      map(currentPage => {
        if (logoutPages.includes(currentPage)) {
          this.routerService.goToMainPage();
        }
      }));
  }

}

