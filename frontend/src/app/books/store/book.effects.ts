import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {BooksActions, FetchBooksFailed, FetchBooksSucceed} from '@@books/store/books.actions';
import {catchError} from 'rxjs/internal/operators';
import {Action} from '@ngrx/store';
import {BooksRestService} from '@@core/services/books/books-rest.service';

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions,
              private booksRestService: BooksRestService) {
  }

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType(BooksActions.FetchBooks),
    mergeMap(() => this.booksRestService.get$()),
    map(books => new FetchBooksSucceed(books)),
    catchError(err => of(new FetchBooksFailed(err)))
  );
}
