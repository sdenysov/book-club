import {INavbar} from '@@navigation/models/navbar.model';
import {Page} from '@@navigation/models/page';
import {createAction, props} from '@ngrx/store';

export namespace NavigationActions {

  export const CURRENT_PAGE_CHANGED = '[NAVIGATION] current page changed';
  export const NAVBAR_STATE_CHANGED = '[NAVIGATION] navbar state changed';

  export const currentPageChanged = createAction(CURRENT_PAGE_CHANGED, props<{ page: Page }>());
  export const navbarStateChanged = createAction(NAVBAR_STATE_CHANGED, props<{ navbar: INavbar }>());
}
