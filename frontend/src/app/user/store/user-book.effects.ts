import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {map, mergeMap} from 'rxjs/operators';
import {BooksRestService} from '@@books/services/books-rest.service';
import {UserBooksActions} from '@@user/store/user-books.actions';

@Injectable()
export class UserBookEffects {

  constructor(private actions$: Actions,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private booksRestService: BooksRestService) {
  }

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType(UserBooksActions.fetchBooks),
    mergeMap(({username}) => this.booksRestService.getByUserName$(username)),
    map(books => UserBooksActions.fetchBooksSucceed({books})),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(UserBooksActions.fetchBooksFailed(error));
    })
  );

}
