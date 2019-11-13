import {NAVIGATION_STORE_KEY} from '@@navigation/store/navigation-store.properties';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {INavigationState} from '@@navigation/models/navigation-state.model';

export namespace NavigationSelectors {
  export const selectNavState = createFeatureSelector<INavigationState>(NAVIGATION_STORE_KEY);
  export const selectNavbar = createSelector(selectNavState, s => s.navbar);
  export const selectCurrentPage = createSelector(selectNavState, s => s.currentPage);
}
