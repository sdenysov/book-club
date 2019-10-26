import {Navbar} from '@@app/navigation/models/navbar.model';
import {Page} from '@@app/navigation/models/page';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class NavigationService {

  getNavbarState(currentPage: Page, userLoggedIn: boolean): Navbar {
    const navbar: Navbar = {
      loginBtnVisible: !userLoggedIn,
      registerBtnVisible: !userLoggedIn,
      searchFieldVisible: true,
      userBtnVisible: userLoggedIn
    };
    switch (currentPage) {
      case Page.LOGIN: {
        navbar.loginBtnVisible = false;
        navbar.registerBtnVisible = true;
        navbar.searchFieldVisible = false;
        navbar.userBtnVisible = false;
        break;
      }
      case Page.REGISTER: {
        navbar.loginBtnVisible = true;
        navbar.registerBtnVisible = false;
        navbar.searchFieldVisible = false;
        navbar.userBtnVisible = false;
        break;
      }
    }
    return navbar;
  }
}

