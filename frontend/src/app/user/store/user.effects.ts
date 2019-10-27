import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {UserActions} from '@@user/store/user.actions';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {map} from 'rxjs/operators';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private routerReduxFacade: RouterReduxFacade) {
  }

  catchObservingUsername$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map(() => this.routerReduxFacade.getUsername()),
    map((username: string) => UserActions.setObservingUsername({username}))
  ));
}
