import {Page} from '@@navigation/models/page';
import {Navbar} from '@@navigation/models/nav-bar.model';

export interface NavigationState {
  navbar: Navbar;
  currentPage: Page;
}
