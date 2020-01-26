import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {Injectable} from '@angular/core';
import {first} from 'rxjs/operators';
import {Page} from '@@navigation/models/page';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';

@Injectable({providedIn: 'root'})
export class AuthService {

  redirectUrl: string;
  restrictedForNonLoggedInUserPages: Page[] = [
    Page.EDIT_BOOK,
    Page.NEW_BOOK,
    Page.EDIT_PROFILE,
    Page.PROFILE_SETTINGS
  ];

  constructor(private routerService: RouterService,
              private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade) {
  }

  isPageAvailableForCurrentLoggedInStatus(currentPage: Page, loggedIn: boolean) {
    return loggedIn || !this.restrictedForNonLoggedInUserPages.includes(currentPage);
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
      if (this.restrictedForNonLoggedInUserPages.includes(currentPage)) {
        this.routerService.goToMainPage();
      }
    });
  }
}

