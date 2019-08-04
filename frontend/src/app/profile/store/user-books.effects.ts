import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {Observable, of} from 'rxjs/index';
import {Action} from '@ngrx/store';
import {
  EditBook,
  FetchEditingBook, FetchUserBooks, UserBooksActions,
  UserBooksActionTypes
} from '@@app/profile/store/user-books.actions';
import {catchError, map, mergeMap} from 'rxjs/internal/operators';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';

@Injectable()
export class UserBooksEffects {

  constructor(private actions$: Actions,
              private booksRestService: BooksRestService,
              private httpErrorHandlerService: HttpErrorHandlerService) {
  }

  @Effect()
  fetchUserBooks$: Observable<Action> = this.actions$.pipe(
    ofType<FetchUserBooks>(UserBooksActionTypes.FetchUserBooks),
    mergeMap((action: FetchUserBooks) => this.booksRestService.getByUserId$(action.user.id)),
    map(userBooks => new UserBooksActions.FetchUserBooksSucceed(userBooks)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new UserBooksActions.FetchUserBooksFailed(error));
    })
  );

  @Effect()
  fetchEditingBook$: Observable<Action> = this.actions$.pipe(
    ofType<FetchEditingBook>(UserBooksActionTypes.FetchEditingBook),
    mergeMap((action: FetchEditingBook) => this.booksRestService.getBookById$(action.bookId)),
    map(book => new UserBooksActions.FetchEditingBookSucceed(book)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new UserBooksActions.FetchEditingBookFailed(error));
    })
  );

  @Effect()
  editBook$: Observable<Action> = this.actions$.pipe(
    ofType<EditBook>(UserBooksActionTypes.EditBook),
    mergeMap((action: EditBook) => this.booksRestService.editBook$(action.book)),
    map(book => new UserBooksActions.EditBookSucceed(book)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new UserBooksActions.EditBookFailed(error));
    })
  );
}
