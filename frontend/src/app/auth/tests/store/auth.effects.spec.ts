import {ICredentials} from '@@auth/models/credentials.model';
import {AuthService} from '@@auth/services/auth.service';
import {LoginFormService} from '@@auth/services/login-form.service';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {AuthActions} from '@@auth/store/auth.actions';
import {AuthEffects} from '@@auth/store/auth.effects';
import {IUser} from '@@share/models/user.model';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Action} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {cold} from 'jasmine-marbles';
import {Observable, of, throwError} from 'rxjs';
import createSpyObj = jasmine.createSpyObj;

fdescribe('AuthEffectsSpec', () => {

  let actions$: Observable<Action>;
  let effects: AuthEffects;
  const loginFormServiceMock = createSpyObj<LoginFormService>([
    'handleLoginFailedResponse',
    'reset'
  ]);
  const authRestServiceMock = createSpyObj<AuthRestService>([
    'login$',
    'logout$',
    'me$'
  ]);
  const authServiceMock = createSpyObj<AuthService>([
    'redirectOnSuccessLogin',
    'redirectOnSuccessLogout',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockStore({}),
        provideMockActions(() => actions$),
        {provide: LoginFormService, useValue: loginFormServiceMock},
        {provide: AuthRestService, useValue: authRestServiceMock},
        {provide: AuthService, useValue: authServiceMock}
      ]
    });
    effects = TestBed.get(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should emit loginSuccess on login action', () => {
    const credentials: ICredentials = {username: 'foo', password: 'bar'};
    actions$ = cold('a', {a: AuthActions.login({credentials})});
    const login$Spy = authRestServiceMock.login$.and.returnValue(of(null));
    effects.login$.subscribe(resultAction => {
      expect(login$Spy).toHaveBeenCalledWith(credentials);
      expect(resultAction).toEqual(AuthActions.loginSuccess());
    });
  });

  it('should emit loginFailed on login action', () => {
    const credentials: ICredentials = {username: 'foo', password: 'bar'};
    actions$ = cold('a', {a: AuthActions.login({credentials})});
    const error = new Error('Response error');
    const login$Spy = authRestServiceMock.login$.and.returnValue(throwError(error));
    effects.login$.subscribe(resultAction => {
      expect(login$Spy).toHaveBeenCalledWith(credentials);
      expect(resultAction).toEqual(AuthActions.loginFailed({error}));
    });
  });

  it('should reset login form, redirect and emit fetchLoggedInUser on loginSuccess', () => {
    actions$ = of(AuthActions.loginSuccess());
    effects.loginSuccess$.subscribe(resultAction => {
      expect(loginFormServiceMock.reset).toHaveBeenCalledWith();
      expect(authServiceMock.redirectOnSuccessLogin).toHaveBeenCalled();
      expect(resultAction).toEqual(AuthActions.fetchLoggedInUser());
    });
  });

  it('should call handleLoginFailedResponse on loginFailed$ action', () => {
    const error = new Error('Response error');
    actions$ = of(AuthActions.loginFailed({error}));
    effects.loginFailed$.subscribe(() => {
      expect(loginFormServiceMock.handleLoginFailedResponse).toHaveBeenCalledWith(error);
    });
  });

  it('should emit fetchLoggedInUserSucceed on fetchLoggedInUser action', () => {
    actions$ = of(AuthActions.fetchLoggedInUser());
    const user: IUser = {id: '123', username: 'username'};
    const my$Spy = authRestServiceMock.me$.and.returnValue(of(user));
    effects.fetchLoggedInUser$.subscribe(resultAction => {
      expect(my$Spy).toHaveBeenCalled();
      expect(resultAction).toEqual(AuthActions.fetchLoggedInUserSucceed({user}));
    });
  });

  it('should emit fetchLoggedInUserFailed on error in fetchLoggedInUser action', () => {
    actions$ = of(AuthActions.fetchLoggedInUser());
    const user: IUser = {id: '123', username: 'username'};
    const my$Spy = authRestServiceMock.me$.and.returnValue(throwError(user));
    effects.fetchLoggedInUser$.subscribe(resultAction => {
      expect(my$Spy).toHaveBeenCalled();
      expect(resultAction).toEqual(AuthActions.fetchLoggedInUserFailed());
    });
  });

  it('should emit setLoggedInStatus on fetchLoggedInUserSucceed action', () => {
    const user: IUser = {id: '123', username: 'username'};
    actions$ = of(AuthActions.fetchLoggedInUserSucceed({user}));
    effects.fetchLoggedInUserSucceed$.subscribe(resultAction => {
      expect(resultAction).toEqual(AuthActions.setLoggedInStatus({loggedIn: true}));
    });
  });

  it('should emit setLoggedInStatus on fetchLoggedInUserFailed action', () => {
    const user: IUser = {id: '123', username: 'username'};
    actions$ = of(AuthActions.fetchLoggedInUserSucceed({user}));
    effects.fetchLoggedInUserFailed$.subscribe(resultAction => {
      expect(resultAction).toEqual(AuthActions.setLoggedInStatus({loggedIn: false}));
    });
  });

  it('should redirect and emit setLoggedInStatus on logout action', () => {
    actions$ = of(AuthActions.logout());
    authRestServiceMock.logout$.and.returnValue(of(null));
    effects.logout$.subscribe(resultAction => {
      expect(authRestServiceMock.logout$).toHaveBeenCalled();
      expect(authServiceMock.redirectOnSuccessLogout).toHaveBeenCalled();
      expect(resultAction).toEqual(AuthActions.setLoggedInStatus({loggedIn: false}));
    });
  });
});
