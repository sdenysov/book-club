import {IBook} from '@@share/models/book';
import {createAction, props} from '@ngrx/store';

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
}

