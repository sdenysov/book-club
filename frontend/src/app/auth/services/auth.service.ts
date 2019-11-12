import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Page} from '@@navigation/models/page';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {

  redirectUrl: string;
  private readonly authOnlyAccessPages = new Set<Page>([
    Page.BOOKS,
    Page.EDIT_PROFILE,
    Page.BOOK_DETAILS,
    Page.PROFILE_SETTING
  ]);

  constructor(private routerService: RouterService,
              private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade) {
  }

  redirectOnSuccessLogin() {
    if (this.redirectUrl) {
      this.routerService.goTo(this.redirectUrl);
    } else {
      this.routerService.goToMainPage();
    }
  }

  redirectOnSuccessLogout() {
    const currentPage = this.navigationReduxFacade.getCurrentPage();
    if (this.authOnlyAccessPages.has(currentPage)) {
      this.routerService.goToMainPage();
    }
  }
}

