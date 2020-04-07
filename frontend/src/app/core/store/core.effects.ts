import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/internal/operators';
import {CoreActions} from '@@core/store/core.actions';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Page} from '@@navigation/models/page';
import {NavigationService} from '@@navigation/services/navigation.service';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {AbilityService} from '@@auth/services/ability.service';
import {INavbar} from '@@navigation/models/nav-bar.model';
import {AuthActions} from '@@auth/store/auth.actions';

@Injectable()
export class CoreEffects {

  constructor(private actions$: Actions,
              private navigationReduxFacade: NavigationReduxFacade,
              private authReduxFacade: AuthReduxFacade,
              private navigationService: NavigationService,
              private abilityService: AbilityService) {
  }

  updateUserRolesAndNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(CoreActions.pageDataFetched, AuthActions.logoutSuccess),
    switchMap(() => {
      const page: Page = this.navigationReduxFacade.getCurrentPage();
      const loggedIn: boolean = this.authReduxFacade.isLoggedIn();
      const navbar: INavbar = this.navigationService.getNavbarState(page, loggedIn);
      const abilities = this.abilityService.defineAbilities();
      return [
        NavigationActions.navbarStateChanged({navbar})
      ];
    })
  ));
}
