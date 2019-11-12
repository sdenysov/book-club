import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {PageAccessLevel} from '@@user/models/page-access-level';
import {UserReduxFacade} from '@@user/store/user-redux-facade';
import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private authReduxFacade: AuthReduxFacade,
              private userReduxFacade: UserReduxFacade) {
  }

  pageAccessLevel$(): Observable<PageAccessLevel> {
    return combineLatest([
      this.authReduxFacade.loggedInUser$,
      this.userReduxFacade.observingUsername$
    ]).pipe(
      map(([loggedInUser, observingUsername]) => {
        return loggedInUser.username === observingUsername
          ? PageAccessLevel.READ_WRITE
          : PageAccessLevel.READ_ONLY;
      })
    );
  }
}
