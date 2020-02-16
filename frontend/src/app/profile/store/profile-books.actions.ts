import {IBook} from '@@share/models/book';
import {createAction, props} from '@ngrx/store';
import {IUserProfile} from '@@app/profile/models/user-profile';

export enum ProfileBooksActionTypes {
  FetchProfileBooks = '[Profile] Fetch user books',
  FetchProfileBooksSucceed = '[Profile] Fetch user books succeed',
  FetchProfileBooksFailed = '[Profile] Fetch user books failed',
  FetchUserProfile = '[Profile] fetch user profile',
  FetchUserProfileSucceed = '[Profile] fetch user profile succeed',
  FetchUserProfileFailed = '[Profile] fetch user profile failed',
}

export namespace ProfileBooksActions {
  export const fetchProfileBooks = createAction(ProfileBooksActionTypes.FetchProfileBooks, props<{ userId: string }>());
  export const fetchProfileBooksSucceed = createAction(ProfileBooksActionTypes.FetchProfileBooksSucceed, props<{ books: IBook[] }>());
  export const fetchProfileBooksFailed = createAction(ProfileBooksActionTypes.FetchProfileBooksFailed, props<{ error: Error }>());

  export const fetchUserProfile = createAction(ProfileBooksActionTypes.FetchUserProfile, props<{ username: string }>());
  export const fetchUserProfileSucceed = createAction(ProfileBooksActionTypes.FetchUserProfileSucceed, props<{ userProfile: IUserProfile }>(
    ));
  export const fetchUserProfileFailed = createAction(ProfileBooksActionTypes.FetchUserProfileFailed, props<{ error: Error }>());
}

