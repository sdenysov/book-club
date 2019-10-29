import {Injectable} from '@angular/core';
import {INavbar} from '@@navigation/models/nav-bar.model';
import {Page} from '@@navigation/models/page';

@Injectable({providedIn: 'root'})
export class NavigationService {

  private readonly defaultNavigationState: INavbar = {
    loginBtnVisible: false,
    registerBtnVisible: false,
    searchFieldVisible: true,
    userBtnVisible: true
  };

  getNavbarState(currentPage: Page, userLoggedIn: boolean): INavbar {
    switch (currentPage) {
      case Page.LOGIN || Page.REGISTER: {
        return {
          ...this.defaultNavigationState,
          loginBtnVisible: !userLoggedIn,
          registerBtnVisible: !userLoggedIn,
          userBtnVisible: userLoggedIn
        };
      }
      default: if (!userLoggedIn) {
        return {
          ...this.defaultNavigationState,
          loginBtnVisible: !userLoggedIn,
          registerBtnVisible: !userLoggedIn,
          userBtnVisible: userLoggedIn
        };
      } else {
        return this.defaultNavigationState;
      }
    }
  }
}

