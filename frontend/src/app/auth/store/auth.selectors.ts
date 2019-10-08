import {AuthState} from '@@auth/models/auth.state';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getState = createFeatureSelector<AuthState>(AUTH_STORE_KEY);
const getLoggedInUser = createSelector(getState, state => state.loggedInUser);
const isLoggedInUserLoaded = createSelector(getState, state => state.loggedInUserLoaded);

export const AuthSelectors = {
  getState,
  getLoggedInUser,
  isLoggedInUserLoaded
};

