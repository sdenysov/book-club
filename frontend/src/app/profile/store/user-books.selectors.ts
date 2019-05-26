import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProfileStateModel} from '@@app/profile/models/profile-state.model';

const getState = createFeatureSelector<ProfileStateModel>('profile');
const getBooks = createSelector(getState, s => s.books);

export const ProfileSelectors = {
  getState,
  getBooks
};
