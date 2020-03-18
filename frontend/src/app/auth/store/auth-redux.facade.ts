import {IAuthState} from '@@auth/models/IAuthState';
import {Credentials} from '@@auth/models/credentials';
import {AuthActions} from '@@auth/store/auth.actions';
import {AuthSelectors} from '@@auth/store/auth.selectors';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {IUser} from '@@shared/models/user';
import {StoreUtils} from '@@shared/utils/store.utils';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthReduxFacade {

  authState$: Observable<IAuthState> = this.store.pipe(select(AuthSelectors.getState));
  isLoggedIn$: Observable<boolean> = this.store.pipe(select(AuthSelectors.isLoggedIn));
  isPending$: Observable<boolean> = this.store.pipe(select(AuthSelectors.isPending));
  user$: Observable<IUser> = this.store.pipe(select(AuthSelectors.getUser));

  constructor(private store: Store<{ [AUTH_STORE_KEY]: IUser }>) {}

  login(credentials: Credentials) {
    this.store.dispatch(AuthActions.login({credentials}));
  }

  getUser(): IUser {
    return StoreUtils.getSync(this.store, AuthSelectors.getUser);
  }

  isLoggedIn(): boolean {
    return StoreUtils.getSync(this.store, AuthSelectors.isLoggedIn);
  }

  logout() {
      this.store.dispatch(AuthActions.logout());
  }
}
