import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {IUser} from '@@share/models/user';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, first, map} from 'rxjs/operators';
import {Page} from '@@navigation/models/page';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';

@Injectable({providedIn: 'root'})
export class AuthService {

  redirectUrl: string;
  logoutPages: Page[] = [
    Page.EDIT_BOOK,
    Page.NEW_BOOK,
    Page.EDIT_PROFILE,
    Page.PROFILE_SETTINGS
  ];

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
    if (this.redirectUrl) {
      this.routerService.goTo(this.redirectUrl);
    } else {
      this.routerService.goToMainPage();
    }
  }

  redirectOnSuccessLogout() {
    this.navigationReduxFacade.currentPage$.pipe(first())
      .subscribe(currentPage => {
        if (this.logoutPages.includes(currentPage)) {
          this.routerService.goToMainPage();
        }
      });
  }
}

