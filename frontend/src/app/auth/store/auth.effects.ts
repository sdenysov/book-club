import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {AuthActions, AuthActionTypes} from '@@auth/store/auth.actions';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/internal/operators';

@Injectable()
export class AuthEffects implements OnInitEffects {

  constructor(private actions$: Actions,
              private authRestService: AuthRestService) {
  }

  fetchLoggedInUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.FETCH_LOGGED_IN),
    switchMap(() => this.authRestService.me()),
    map(user => AuthActions.fetchLoggedInUserSucceed({user})),
    catchError(() => of(AuthActions.fetchLoggedInUserFailed()))
  ));

  ngrxOnInitEffects(): Action {
    return AuthActions.fetchLoggedInUser();
  }
}
