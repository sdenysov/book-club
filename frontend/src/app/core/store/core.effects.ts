import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/internal/operators';
import {CoreActions} from '@@core/store/core.actions';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Page} from '@@navigation/models/page';
import {IUser} from '@@share/models/user';
import {NavigationService} from '@@navigation/services/navigation.service';
import {NavigationActions} from '@@navigation/store/navigation.actions';

@Injectable()
export class CoreEffects {

  constructor(private actions$: Actions,
              private navigationReduxFacade: NavigationReduxFacade,
              private authReduxFacade: AuthReduxFacade,
              private navigationService: NavigationService) {
  }

  updateUserRolesAndNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(CoreActions.pageDataFetched),
    switchMap(() => {
      const page: Page = this.navigationReduxFacade.getCurrentPage();
      const loggedIn: boolean = this.authReduxFacade.isLoggedIn();
      const navigationState = this.navigationService.getNavbarState(page, loggedIn);
      const user: IUser = this.authReduxFacade.getUser();
      // TODO define user roles based on user
      return [
        NavigationActions.navbarStateChanged({navigationState})
      ];
    })
  ));
}
