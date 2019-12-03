import {AuthService} from '@@auth/services/auth.service';
import {LoginFormService} from '@@auth/services/login-form.service';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {AuthActions} from '@@auth/store/auth.actions';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, exhaustMap, map, switchMap, tap} from 'rxjs/internal/operators';

@Injectable()
export class AuthEffects implements OnInitEffects {

  constructor(private actions$: Actions,
              private authService: AuthService,
              private loginFormService: LoginFormService,
              private authRestService: AuthRestService) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    exhaustMap(({credentials}) => this.authRestService.login$(credentials)),
    map(() => AuthActions.loginSuccess()),
    catchError(error => of(AuthActions.loginFailed({error})))
  ));

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginSuccess),
    map(() => {
      this.loginFormService.reset();
      this.authService.redirectOnSuccessLogin();
      return AuthActions.fetchLoggedInUser();
    })
  ));

  loginFailed$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginFailed),
    tap(({error}) => this.loginFormService.handleLoginFailedResponse(error))
  ), {dispatch: false});

  fetchLoggedInUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.fetchLoggedInUser),
    switchMap(() => this.authRestService.me$()),
    map(user => AuthActions.fetchLoggedInUserSucceed({user})),
    catchError(() => of(AuthActions.fetchLoggedInUserFailed()))
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    exhaustMap(() => this.authRestService.logout$()),
    map(() => this.authService.redirectOnSuccessLogout())
  ), {dispatch: false});

  ngrxOnInitEffects(): Action {
    return AuthActions.fetchLoggedInUser();
  }
}
