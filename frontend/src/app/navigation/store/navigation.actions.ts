import {createAction, props} from '@ngrx/store';

export enum NavigationActionTypes {
  CURRENT_PAGE_CHANGED = '[Navigation] current page changed',
  NAVBAR_STATE_CHANGED = '[Navigation] navbar state changed'
}

export const NavigationActions = {
  currentPageChanged: createAction(NavigationActionTypes.CURRENT_PAGE_CHANGED, props<{ currentPage }>()),
  navbarStateChanged: createAction(NavigationActionTypes.NAVBAR_STATE_CHANGED, props<{ navbar }>())
};
