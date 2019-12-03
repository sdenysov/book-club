import {INavbar} from '@@navigation/models/navbar.model';
import {Page} from '@@navigation/models/page';
import {createAction, props} from '@ngrx/store';

export enum NavigationActionTypes {
  CURRENT_PAGE_CHANGED = '[NAVIGATION] current page changed',
  NAVBAR_STATE_CHANGED = '[NAVIGATION] navbar state changed'
}

export namespace NavigationActions {
  export const currentPageChanged = createAction(NavigationActionTypes.CURRENT_PAGE_CHANGED, props<{ page: Page }>());
  export const navbarStateChanged = createAction(NavigationActionTypes.NAVBAR_STATE_CHANGED, props<{ navbar: INavbar }>());
}
