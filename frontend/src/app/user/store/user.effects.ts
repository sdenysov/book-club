import {Injectable} from '@angular/core';
import {UserRestService} from '@@user/services/user-rest.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs/index';
import {Action} from '@ngrx/store';
import {UserActions, UserActionTypes} from '@@user/store/user.actions';
import {catchError, exhaustMap, map} from 'rxjs/internal/operators';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private userRestService: UserRestService) {
  }

  @Effect()
  loadCurrentUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.FetchCurrentUser),
    exhaustMap(() => this.userRestService.getCurrentUser$()),
    map(user => new UserActions.FetchCurrentUserSucceed(user)),
    catchError(err => of(new UserActions.FetchCurrentUserFailed(err)))
  );
}
