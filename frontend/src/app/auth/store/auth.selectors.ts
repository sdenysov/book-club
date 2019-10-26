import {AuthState} from '@@auth/models/auth.state';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export namespace AuthSelectors {
  export const getState = createFeatureSelector<AuthState>(AUTH_STORE_KEY);
  export const getLoggedInUser = createSelector(getState, state => state.loggedInUser);
  export const isLoggedInUserLoaded = createSelector(getState, state => state.loggedInUserLoaded);
}
