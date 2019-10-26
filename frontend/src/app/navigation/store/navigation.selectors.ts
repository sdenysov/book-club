import {NavigationState} from '@@navigation/models/navigation.model';
import {NAVIGATION_STORE_KEY} from '@@navigation/store/navigation-store.properties';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export namespace NavigationSelectors {
  export const selectNavState = createFeatureSelector<NavigationState>(NAVIGATION_STORE_KEY);
  export const selectNavbar = createSelector(selectNavState, s => s.navbar);
  export const selectCurrentPage = createSelector(selectNavState, s => s.currentPage);
}
