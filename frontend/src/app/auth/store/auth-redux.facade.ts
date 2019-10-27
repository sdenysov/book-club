import {AuthState} from '@@auth/models/auth.state';
import {Credentials} from '@@auth/models/credentials';
import {AuthActions} from '@@auth/store/auth.actions';
import {AuthSelectors} from '@@auth/store/auth.selectors';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {User} from '@@share/models/user';
import {StoreUtils} from '@@share/utils/store.utils';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthReduxFacade {

  authState$: Observable<AuthState> = this.store.pipe(select(AuthSelectors.getState));
  loggedInUser$: Observable<User> = this.store.pipe(select(AuthSelectors.getLoggedInUser));

  constructor(private store: Store<{ [AUTH_STORE_KEY]: User }>) {}

  login(credentials: Credentials) {
    this.store.dispatch(AuthActions.login({credentials}));
  }

  getLoggedInUser(): User {
    return StoreUtils.getSync(this.store, AuthSelectors.getLoggedInUser);
  }
}
