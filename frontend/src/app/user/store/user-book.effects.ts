import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {map, mergeMap} from 'rxjs/operators';
import {BooksRestService} from '@@books/services/books-rest.service';
import {BooksActionTypes, FetchBookDetail, FetchBooks, UserBooksActions} from '@@user/store/user-books.actions';
import {UserRestService} from '@@user/services/user-rest.service';

@Injectable()
export class UserBookEffects {

  constructor(private actions$: Actions,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private booksRestService: BooksRestService,
              private userRestService: UserRestService) {
  }

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType(BooksActionTypes.FetchBooks),
    mergeMap(({username}) => this.booksRestService.getByUserName$(username)),
    map(books => new UserBooksActions.FetchBooksSucceed(books)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new UserBooksActions.FetchBooksFailed(error));
    })
  );

  @Effect()
  fetchBookDetail$: Observable<Action> = this.actions$.pipe(
    ofType(BooksActionTypes.FetchBookDetail),
    mergeMap((action: FetchBookDetail) => this.booksRestService.getBookById$(action.bookId)),
    map(book => new UserBooksActions.FetchBookDetailSucceed(book)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new UserBooksActions.FetchBookDetailFailed(error));
    })
  );
}
