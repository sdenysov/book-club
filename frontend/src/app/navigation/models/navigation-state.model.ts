import {Page} from '@@navigation/models/page';
import {INavbar} from '@@navigation/models/nav-bar.model';

export interface INavigationState {
  navbar: INavbar;
  currentPage: Page;
}
