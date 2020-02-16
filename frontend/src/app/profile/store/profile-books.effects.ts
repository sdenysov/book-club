import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {of} from 'rxjs/index';
import {ProfileBooksActions, ProfileBooksActionTypes} from '@@app/profile/store/profile-books.actions';
import {catchError, map, mergeMap} from 'rxjs/internal/operators';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {UserService} from '@@user/services/user.service';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';

@Injectable()
export class ProfileBooksEffects {

  constructor(private actions$: Actions,
              private booksRestService: BooksRestService,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private userService: UserService,
              private routerReduxFacade: RouterReduxFacade) {
  }

  fetchProfileBooks$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileBooksActionTypes.FetchProfileBooks),
    mergeMap(id => this.booksRestService.getByUserId$(id)),
    map(books => ProfileBooksActions.fetchProfileBooksSucceed({books})),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(ProfileBooksActions.fetchProfileBooksFailed({error}));
    })
  ));


  fetchUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileBooksActionTypes.FetchUserProfile),
    mergeMap(() => {
      const urlUsername = this.routerReduxFacade.getUsername();
      return this.userService.getUserProfile$(urlUsername);
    }),
    map(user => ProfileBooksActions.fetchUserProfileSucceed({user})),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(ProfileBooksActions.fetchUserProfileFailed({error}));
    })
  ));
}

