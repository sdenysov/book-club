import {select, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {UserStateModel} from '@@user/models/user-state.model';
import {FetchCurrentUser} from '@@user/store/user.actions';
import {UserModel} from '@@user/models/user.model';
import {getUser} from '@@user/store/user.selectors';
import {StoreUtils} from '@@share/utils/store.utils';
import {map} from 'rxjs/internal/operators';

@Injectable({providedIn: 'root'})
export class UserReduxService {

  constructor(private store: Store<{ user: UserStateModel }>) {}

  user$: Observable<UserModel> = this.store.pipe(select(getUser));
  currentUserExists$: Observable<boolean> = this.user$.pipe(map(Boolean));

  fetchCurrentUser() {
    this.store.dispatch(new FetchCurrentUser());
  }

  getCurrentUser(): UserModel {
    const user = StoreUtils.getSync(this.store, getUser);
    return user ? user : null;
  }

  isCurrentUserExists(): boolean {
    return Boolean(this.getCurrentUser());
  }
}
