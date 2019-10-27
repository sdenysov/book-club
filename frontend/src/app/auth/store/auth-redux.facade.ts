import {IAuthState} from '@@auth/models/IAuthState';
import {ICredentials} from '@@auth/models/ICredentials';
import {AuthActions} from '@@auth/store/auth.actions';
import {AuthSelectors} from '@@auth/store/auth.selectors';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {IUser} from '@@share/models/IUser';
import {StoreUtils} from '@@share/utils/store.utils';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthReduxFacade {

  authState$: Observable<IAuthState> = this.store.pipe(select(AuthSelectors.getState));
  loggedInUser$: Observable<IUser> = this.store.pipe(select(AuthSelectors.getLoggedInUser));

  constructor(private store: Store<{ [AUTH_STORE_KEY]: IUser }>) {}

  login(credentials: ICredentials) {
    this.store.dispatch(AuthActions.login({credentials}));
  }

  loginSuccess(user: IUser) {
    this.store.dispatch(AuthActions.loginSuccess({user}));
  }

  getLoggedInUser(): IUser {
    return StoreUtils.getSync(this.store, AuthSelectors.getLoggedInUser);
  }
}
