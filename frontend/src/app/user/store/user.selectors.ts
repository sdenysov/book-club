import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserStateModel} from '@@user/models/user-state.model';

export const getState = createFeatureSelector<UserStateModel>('user');
export const getUser = createSelector(getState, s => s.entry);
