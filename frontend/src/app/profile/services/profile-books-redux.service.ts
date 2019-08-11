import {Injectable} from '@angular/core';
import {ProfileStateModel} from '@@app/profile/models/profile-state.model';
import {select, Store} from '@ngrx/store';
import {ProfileBooksActions} from '@@app/profile/store/profile-books.actions';
import {Observable} from 'rxjs/index';
import {BookModel} from '@@share/models/book.model';
import {ProfileSelectors} from '@@app/profile/store/profile-books.selectors';
import {UserModel} from '@@share/models/user.model';

@Injectable({providedIn: 'root'})
export class ProfileBooksReduxService {

  constructor(private store: Store<{ profile: ProfileStateModel }>) {}

  books$: Observable<BookModel[]> = this.store.pipe(select(ProfileSelectors.getBooks));
  loading$: Observable<boolean> = this.store.pipe(select(ProfileSelectors.isLoading));
  loaded$: Observable<boolean> = this.store.pipe(select(ProfileSelectors.isLoaded));

  fetchProfileBooks(user: UserModel) {
    this.store.dispatch(new ProfileBooksActions.FetchProfileBooks(user));
  }

  getProfileBookById$(id: string): Observable<BookModel> {
    return this.store.pipe(select(ProfileSelectors.getProfileBookById(id)));
  }
}
