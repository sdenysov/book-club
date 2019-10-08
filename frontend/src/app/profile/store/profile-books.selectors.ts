import {ProfileState} from '@@app/profile/models/profile.state.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getState = createFeatureSelector<ProfileState>('profile');
const getBooks = createSelector(getState, s => s.books);
const isLoading = createSelector(getState, s => s.loading);
const isLoaded = createSelector(getState, s => s.loaded);

const getProfileBookById = function (id: string) {
  return createSelector(getBooks, books => books.find(book => book.id === id));
};

export const ProfileSelectors = {
  getState,
  getBooks,
  isLoading,
  isLoaded,
  getProfileBookById
};
