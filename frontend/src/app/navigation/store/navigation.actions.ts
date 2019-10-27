import {createAction, props} from '@ngrx/store';

export enum NavigationActionTypes {
  CURRENT_PAGE_CHANGED = '[Navigation] current page changed'
}

export const NavigationActions = {
  currentPageChanged: createAction(NavigationActionTypes.CURRENT_PAGE_CHANGED, props<{ currentPage }>())
};
