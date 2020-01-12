import {IAuthState} from '@@auth/models/IAuthState';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export namespace AuthSelectors {
  export const getState = createFeatureSelector<IAuthState>(AUTH_STORE_KEY);
  export const getUser = createSelector(getState, state => state.user);
  export const isLoggedIn = createSelector(getState, state => state.loggedIn);
  export const isPending = createSelector(getState, state => state.pending);
}

