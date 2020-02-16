import {PageAccessLevel} from '@@user/models/page-access-level';
import {UserState} from '@@user/models/user-state';
import {UserSelectors} from '@@user/store/user.selectors';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {FetchBooks} from '@@app/user-books/store/user-books.actions';

@Injectable({providedIn: 'root'})
export class UserReduxFacade {

  observingUsername$: Observable<string> = this.store.pipe(select(UserSelectors.getObservingUsername));
  pageAccessLevel$: Observable<PageAccessLevel> = this.store.pipe(select(UserSelectors.getPageAccessLevel));

  constructor(private store: Store<UserState>) {}
}

