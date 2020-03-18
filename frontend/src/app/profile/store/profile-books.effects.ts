import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {ProfileBooksActions} from '@@app/profile/store/profile-books.actions';
import {catchError, map, mergeMap} from 'rxjs/internal/operators';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {UserRestService} from '@@user/services/user-rest.service';
import {BooksRestService} from '@@books/services/books-rest.service';

@Injectable()
export class ProfileBooksEffects {

  constructor(private actions$: Actions,
              private booksRestService: BooksRestService,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private userRestService: UserRestService) {
  }

  fetchProfileBooks$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileBooksActions.fetchProfileBooks),
    mergeMap(({userId}) => this.booksRestService.getByUserId$(userId)),
    map(books => ProfileBooksActions.fetchProfileBooksSucceed({books})),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(ProfileBooksActions.fetchProfileBooksFailed({error}));
    })
  ));

  fetchUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileBooksActions.fetchUserProfile),
    mergeMap(({username}) => this.userRestService.getUserProfile$(username).pipe(
      map(userProfile => ProfileBooksActions.fetchUserProfileSucceed({userProfile})),
      catchError(error => {
        this.httpErrorHandlerService.handleErrorResponse(error);
        return of(ProfileBooksActions.fetchUserProfileFailed({error}));
      })
    )),
  ));
}

