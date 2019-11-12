import {IAuthState} from '@@auth/models/auth-state.model';
import {ICredentials} from '@@auth/models/credentials.model';
import {AuthService} from '@@auth/services/auth.service';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {AuthActions} from '@@auth/store/auth.actions';
import {AuthSelectors} from '@@auth/store/auth.selectors';
import {IUser} from '@@share/models/user.model';
import {StoreUtils} from '@@share/utils/store.utils';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthReduxFacade {

  authState$: Observable<IAuthState> = this.store.pipe(select(AuthSelectors.getState));
  loggedInUser$: Observable<IUser> = this.store.pipe(select(AuthSelectors.getLoggedInUser));
  isLoggedIn$: Observable<boolean> = this.store.pipe(select(AuthSelectors.isLoggedIn));

  constructor(private store: Store<{ [AUTH_STORE_KEY]: IUser }>) {}

  login(credentials: ICredentials) {
    this.store.dispatch(AuthActions.login({credentials}));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  getLoggedInUser(): IUser {
    return StoreUtils.getSync(this.store, AuthSelectors.getLoggedInUser);
  }
}
