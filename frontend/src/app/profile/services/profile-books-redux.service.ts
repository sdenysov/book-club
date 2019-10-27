import {ProfileState} from '@@app/profile/models/profile.state.model';
import {ProfileBooksActions} from '@@app/profile/store/profile-books.actions';
import {ProfileSelectors} from '@@app/profile/store/profile-books.selectors';
import {Book} from '@@share/models/book';
import {User} from '@@share/models/user';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProfileBooksReduxService {

  constructor(private store: Store<{ profile: ProfileState }>) {}

  books$: Observable<Book[]> = this.store.pipe(select(ProfileSelectors.getBooks));
  loading$: Observable<boolean> = this.store.pipe(select(ProfileSelectors.isLoading));
  loaded$: Observable<boolean> = this.store.pipe(select(ProfileSelectors.isLoaded));

  fetchProfileBooks(user: User) {
    this.store.dispatch(new ProfileBooksActions.FetchProfileBooks(user));
  }

  getProfileBookById$(id: string): Observable<Book> {
    return this.store.pipe(select(ProfileSelectors.getProfileBookById(id)));
  }
}
