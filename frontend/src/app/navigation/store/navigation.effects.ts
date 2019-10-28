import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {ROUTER_NAVIGATED, RouterReducerState} from '@ngrx/router-store';
import {first, map, switchMap} from 'rxjs/operators';
import {PageService} from '../services/page.service';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {combineLatest} from 'rxjs';
import {AuthService} from '@@auth/services/auth.service';
import {NavigationService} from '@@navigation/services/navigation.service';

@Injectable()
export class NavigationEffects {

  pageAndLoggedIn$ = combineLatest([
    this.actions$.pipe(ofType(NavigationActions.currentPageChanged)),
    this.authService.isLoggedIn$
  ]);

  constructor(private actions$: Actions,
              private routerReduxFacade: RouterReduxFacade,
              private pageService: PageService,
              private authService: AuthService,
              private navigationService: NavigationService) {
  }

  catchCurrentPage$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    switchMap(() => this.routerReduxFacade.currentUrl$),
    map(currentUrl => this.pageService.getCurrentPage(currentUrl)),
    map(currentPage => NavigationActions.currentPageChanged({currentPage}))
  ));

  setNavbarState$ = createEffect(() => this.pageAndLoggedIn$.pipe(
    map(([{currentPage}, isLoggedIn]) => this.navigationService.getNavbarState(currentPage, isLoggedIn)),
    map((navigationState) => NavigationActions.navbarStateChanged({navigationState}))
  ));
}
