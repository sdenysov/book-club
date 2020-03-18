import {ProfileState} from '@@app/profile/models/profile.state.model';
import {ProfileBooksActions} from '@@app/profile/store/profile-books.actions';
import {ProfileSelectors} from '@@app/profile/store/profile-books.selectors';
import {IUser} from '@@shared/models/user';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IBook} from '@@books/models/book';

@Injectable({providedIn: 'root'})
export class ProfileBooksReduxService {

  constructor(private store: Store<{ profile: ProfileState }>) {}

  books$: Observable<IBook[]> = this.store.pipe(select(ProfileSelectors.getBooks));
  loading$: Observable<boolean> = this.store.pipe(select(ProfileSelectors.isLoading));
  loaded$: Observable<boolean> = this.store.pipe(select(ProfileSelectors.isLoaded));

  fetchProfileBooks(user: IUser) {
    this.store.dispatch(ProfileBooksActions.fetchProfileBooks({userId: user.id}));
  }

  getProfileBookById$(id: string): Observable<IBook> {
    return this.store.pipe(select(ProfileSelectors.getProfileBookById(id)));
  }
}
