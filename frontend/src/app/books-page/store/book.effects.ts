import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {BooksDataService} from '@@books-page/services/books-data.service';
import {BooksActions, FetchBooksSucceed} from '@@books-page/store/books.actions';
import {catchError} from 'rxjs/internal/operators';

@Injectable()
export class BookEffects {

  @Effect()
  loadBooks$ = this.actions$
    .pipe(
      ofType(BooksActions.FetchBooks),
      mergeMap(() => this.booksDataService.get()
        .pipe(
          map(books => new FetchBooksSucceed(books)),
          catchError(() => EMPTY)
        ))
    );

constructor(
    private actions$: Actions,
    private booksDataService: BooksDataService
  ) {}
}
