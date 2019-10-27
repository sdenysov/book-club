import {INavbar} from '@@app/navigation/models/navbar.model';
import {Page} from '@@app/navigation/models/page';

export interface INavigationState {
  navbar: INavbar;
  currentPage: Page;
}
