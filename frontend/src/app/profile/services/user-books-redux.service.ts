import {Injectable} from '@angular/core';
import {ProfileStateModel} from '@@app/profile/models/profile-state.model';
import {select, Store} from '@ngrx/store';
import {UserBooksActions} from '@@app/profile/store/user-books.actions';
import {UserModel} from '@@user/models/user.model';
import {Observable} from 'rxjs/index';
import {BookModel} from '@@share/models/book.model';
import {ProfileSelectors} from '@@app/profile/store/user-books.selectors';

@Injectable({providedIn: 'root'})
export class UserBooksReduxService {

  constructor(private store: Store<{profile: ProfileStateModel}>) {}

  books$: Observable<BookModel[]> = this.store.pipe(select(ProfileSelectors.getBooks));

  fetchUserBooks(user: UserModel) {
    this.store.dispatch(new UserBooksActions.FetchUserBooks(user));
  }
}
