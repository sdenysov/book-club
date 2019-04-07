import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {BooksDataService} from '@@books-page/services/books-data.service';
import {BooksActions, FetchBooksFailed, FetchBooksSucceed} from '@@books-page/store/books.actions';
import {catchError, tap} from 'rxjs/internal/operators';
import {Action} from '@ngrx/store';

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions,
              private booksDataService: BooksDataService) {
  }

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType(BooksActions.FetchBooks),
    tap(() => console.log('before request')),
    mergeMap(() => this.booksDataService.get$()),
    tap(() => console.log('after request')),
    map(books => new FetchBooksSucceed(books)),
    catchError(err => of(new FetchBooksFailed(err)))
  );
}
