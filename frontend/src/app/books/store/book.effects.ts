import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {
  BooksActions, BooksActionTypes, FetchBookDetail, FetchBooksFailed,
  FetchBooksSucceed
} from '@@books/store/books.actions';
import {catchError} from 'rxjs/internal/operators';
import {Action} from '@ngrx/store';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {FetchEditingBook, UserBooksActions, UserBooksActionTypes} from '@@app/profile/store/user-books.actions';

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private booksRestService: BooksRestService) {
  }

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType(BooksActionTypes.FetchBooks),
    mergeMap(() => this.booksRestService.get$()),
    map(books => new FetchBooksSucceed(books)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new FetchBooksFailed(error));
    })
  );
  @Effect()
  fetchBookDetail$: Observable<Action> = this.actions$.pipe(
    ofType<FetchBookDetail>(BooksActionTypes.FetchBookDetail),
    mergeMap((action: FetchBookDetail) => this.booksRestService.getBookById$(action.bookId)),
    map(book => new BooksActions.FetchBookDetailSucceed(book)),
    catchError(err => of(new BooksActions.FetchBookDetailFailed(err)))
  );
}
