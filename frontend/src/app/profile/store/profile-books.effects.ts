import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {Observable, of} from 'rxjs/index';
import {Action} from '@ngrx/store';
import {
  EditBook, EditBookSucceed,
  FetchEditingBook, FetchProfileBooks, ProfileBooksActions,
  ProfileBooksActionTypes
} from '@@app/profile/store/profile-books.actions';
import {catchError, map, mergeMap} from 'rxjs/internal/operators';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';

@Injectable()
export class ProfileBooksEffects {

  constructor(private actions$: Actions,
              private booksRestService: BooksRestService,
              private httpErrorHandlerService: HttpErrorHandlerService) {
  }

  @Effect()
  fetchProfileBooks$: Observable<Action> = this.actions$.pipe(
    ofType<FetchProfileBooks>(ProfileBooksActionTypes.FetchProfileBooks),
    mergeMap((action: FetchProfileBooks) => this.booksRestService.getByUserId$(action.user.id)),
    map(ProfileBooks => new ProfileBooksActions.FetchProfileBooksSucceed(ProfileBooks)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new ProfileBooksActions.FetchProfileBooksFailed(error));
    })
  );

  @Effect()
  fetchEditingBook$: Observable<Action> = this.actions$.pipe(
    ofType<FetchEditingBook>(ProfileBooksActionTypes.FetchEditingBook),
    mergeMap((action: FetchEditingBook) => this.booksRestService.getBookById$(action.bookId)),
    map(book => new ProfileBooksActions.FetchEditingBookSucceed(book)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new ProfileBooksActions.FetchEditingBookFailed(error));
    })
  );

  @Effect()
  editBook$: Observable<Action> = this.actions$.pipe(
    ofType<EditBook>(ProfileBooksActionTypes.EditBook),
    mergeMap((action: EditBook) => this.booksRestService.editBook$(action.book)),
    map(book => new ProfileBooksActions.EditBookSucceed(book)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new ProfileBooksActions.EditBookFailed(error));
    })
  );
}
