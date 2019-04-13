import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BooksStateModel} from '@@books-page/models/books-state.model';

export const getState = createFeatureSelector<BooksStateModel>('books');
export const getBooks = createSelector(getState, s => s.entries);
export const getBookById = (id) => createSelector(getBooks, books => {
    return books.find(book => {
      return book.id === id;
    });
});
