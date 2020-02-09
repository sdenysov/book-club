import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {Observable, of} from 'rxjs/index';
import {Action} from '@ngrx/store';
import {
  FetchProfileBooks, ProfileBooksActions,
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
    map(books => ProfileBooksActions.fetchProfileBooksSucceed({books})),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(ProfileBooksActions.fetchProfileBooksFailed({error}));
    })
  );
}
