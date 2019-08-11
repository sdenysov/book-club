import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs/index';
import {Action} from '@ngrx/store';
import {UserActions, UserActionTypes} from '@@user/store/user.actions';
import {catchError, exhaustMap, map} from 'rxjs/internal/operators';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {UserRestService} from '@@core/services/user/user-rest.service';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private userRestService: UserRestService,
              private httpErrorHandlerService: HttpErrorHandlerService) {
  }

  @Effect()
  loadCurrentUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.FetchCurrentUser),
    exhaustMap(() => this.userRestService.getCurrentUser$()),
    map(user => new UserActions.FetchCurrentUserSucceed(user)),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(new UserActions.FetchCurrentUserFailed(error));
    })
  );
}
