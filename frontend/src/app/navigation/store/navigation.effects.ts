import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {AuthActions} from '@@auth/store/auth.actions';
import {INavbar} from '@@navigation/models/navbar.model';
import {NavigationService} from '@@navigation/services/navigation.service';
import {PageService} from '@@navigation/services/page.service';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ROUTER_NAVIGATED, RouterNavigatedAction} from '@ngrx/router-store';
import {map, withLatestFrom} from 'rxjs/operators';

@Injectable()
export class NavigationEffects {

  constructor(private actions$: Actions,
              private pageService: PageService,
              private navigationService: NavigationService,
              private navigationReduxFacade: NavigationReduxFacade,
              private authReduxFacade: AuthReduxFacade) {
  }

  updateCurrentPage$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map((action: RouterNavigatedAction) => action.payload.routerState.url),
    map(currentUrl => this.pageService.getPageByUrl(currentUrl)),
    map(page => NavigationActions.currentPageChanged({page}))
  ));

  updateNavStateOnPageChange$ = createEffect(() => this.actions$.pipe(
    ofType(NavigationActions.currentPageChanged),
    withLatestFrom(this.authReduxFacade.isLoggedIn$),
    map(([{page}, loggedIn]) => {
      return this.navigationService.getNavbarState(page, loggedIn);
    }),
    map((navbar: INavbar) => NavigationActions.navbarStateChanged({navbar}))
  ));

  updateNavStateOnLoggedInChange$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.setLoggedInStatus),
    withLatestFrom(this.navigationReduxFacade.currentPage$),
    map(([{loggedIn}, page]) => {
      return this.navigationService.getNavbarState(page, loggedIn);
    }),
    map((navbar: INavbar) => NavigationActions.navbarStateChanged({navbar}))
  ));
}

