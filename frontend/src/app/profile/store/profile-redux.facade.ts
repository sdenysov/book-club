import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IUserProfile} from '@@app/profile/models/user-profile';
import {PROFILE_STORE_KEY} from '@@app/profile/store/profile-store.properties';
import {ProfileBooksActions} from '@@app/profile/store/profile-books.actions';
import {ProfileSelectors} from '@@app/profile/store/profile-books.selectors';
import {ProfileState} from '@@app/profile/models/profile.state.model';

@Injectable({providedIn: 'root'})
export class ProfileReduxFacade {

  userProfile$: Observable<IUserProfile> = this.store.pipe(select(ProfileSelectors.getUserProfile));
  userProfileState$: Observable<ProfileState> = this.store.pipe(select(ProfileSelectors.getState));
  constructor(private store: Store<{ [PROFILE_STORE_KEY]: IUserProfile }>) {}

  fetchUserProfile() {
    this.store.dispatch(ProfileBooksActions.fetchUserProfile());
  }
}
