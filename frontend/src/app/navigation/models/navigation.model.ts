import {Navbar} from '@@app/navigation/models/navbar.model';
import {Page} from '@@app/navigation/models/page';

export interface NavigationState {
  navbar: Navbar;
  currentPage: Page;
}
