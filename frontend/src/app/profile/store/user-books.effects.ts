import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {Observable, of} from 'rxjs/index';
import {Action} from '@ngrx/store';
import {FetchUserBooks, UserBooksActions, UserBooksActionTypes} from '@@app/profile/store/user-books.actions';
import {catchError, map, mergeMap} from 'rxjs/internal/operators';

@Injectable()
export class UserBooksEffects {

  constructor(private actions$: Actions,
              private booksRestService: BooksRestService) {
  }

  @Effect()
  fetchUserBooks$: Observable<Action> = this.actions$.pipe(
    ofType<FetchUserBooks>(UserBooksActionTypes.FetchUserBooks),
    mergeMap((action: FetchUserBooks) => this.booksRestService.getByUserId$(action.user.id)),
    map(userBooks => new UserBooksActions.FetchUserBooksSucceed(userBooks)),
    catchError(err => of(new UserBooksActions.FetchUserBooksFailed(err)))
  );
}
