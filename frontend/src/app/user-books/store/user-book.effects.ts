import {BooksActionTypes, FetchBookDetail, UserBooksActions} from '@@app/user-books/store/user-books.actions';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class UserBookEffects {

  constructor(private actions$: Actions,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private booksRestService: BooksRestService) {
  }

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType(BooksActionTypes.FetchBooks),
    mergeMap(() => this.booksRestService.get$()),
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
