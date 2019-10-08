import {RouterStateService} from '@@router/services/router-state.service';
import {UserActions} from '@@user/store/user.actions';
import {Injectable} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {map} from 'rxjs/operators';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private routerStateService: RouterStateService) {
  }

  catchObservingUsername$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map(() => this.routerStateService.getUsername()),
    map((username: string) => UserActions.setObservingUsername({username}))
  );
}
