import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProfileStateModel} from '@@app/profile/models/profile-state.model';

const getState = createFeatureSelector<ProfileStateModel>('profile');
const getBooks = createSelector(getState, s => s.books);
const isLoading = createSelector(getState, s => s.loading);
const isLoaded = createSelector(getState, s => s.loaded);
const getUserBookById = function (id: number) {
  return createSelector(getBooks, books => books.find(book => book.id === +id));
};

export const ProfileSelectors = {
  getState,
  getBooks,
  isLoading,
  isLoaded,
  getUserBookById
};
