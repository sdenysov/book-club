import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {map, mergeMap} from 'rxjs/operators';
import {BooksRestService} from '@@books/services/books-rest.service';
import {BooksFinderActions} from '@@app/books-finder/store/books-finder.actions';

@Injectable()
export class BooksFinderEffects {

  constructor(private actions$: Actions,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private booksRestService: BooksRestService) {
  }

  fetchAllBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BooksFinderActions.fetchBooks),
    mergeMap(() => this.booksRestService.get$()),
    map(books => BooksFinderActions.setBooks({books})),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(BooksFinderActions.fetchBooksFailed({error}));
    })
  ));

  searchBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BooksFinderActions.searchBooks),
    mergeMap(({query}) => this.booksRestService.search$(query)),
    map(books => BooksFinderActions.setBooks({books})),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(BooksFinderActions.fetchBooksFailed({error}));
    })
  ));
}
