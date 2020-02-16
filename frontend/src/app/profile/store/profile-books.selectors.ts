import {ProfileState} from '@@app/profile/models/profile.state.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PROFILE_STORE_KEY} from '@@app/profile/store/profile-store.properties';

export namespace ProfileSelectors {
  export const getState = createFeatureSelector<ProfileState>(PROFILE_STORE_KEY);
  export const getBooks = createSelector(getState, s => s.books);
  export const isLoading = createSelector(getState, s => s.loading);
  export const isLoaded = createSelector(getState, s => s.loaded);
  export const getUserProfile = createSelector(getState, s => s.user);
  export const getProfileBookById = function (id: string) {
    return createSelector(getBooks, books => books.find(book => book.id === id));
  };
}
