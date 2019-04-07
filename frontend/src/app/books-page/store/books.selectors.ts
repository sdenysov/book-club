import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BooksStateModel} from '@@books-page/models/books-state.model';

export const getState = createFeatureSelector<BooksStateModel>('books');
export const getBooks = createSelector(getState, s => s.entries);
