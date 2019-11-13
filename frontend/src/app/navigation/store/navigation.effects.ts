import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {ROUTER_NAVIGATED, RouterNavigatedAction} from '@ngrx/router-store';
import {map} from 'rxjs/operators';
import {PageService} from '../services/page.service';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {combineLatest} from 'rxjs';
import {AuthService} from '@@auth/services/auth.service';
import {NavigationService} from '@@navigation/services/navigation.service';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';

@Injectable()
export class NavigationEffects {

  pageAndLoggedIn$ = combineLatest([
    this.navigationReduxFacade.currentPage$,
    this.authService.isLoggedIn$
  ]);

  constructor(private actions$: Actions,
              private pageService: PageService,
              private authService: AuthService,
              private navigationReduxFacade: NavigationReduxFacade,
              private navigationService: NavigationService) {
  }

  updateCurrentPage$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map((action: RouterNavigatedAction) => action.payload.routerState.url),
    map(currentUrl => this.pageService.getPageByUrl(currentUrl)),
    map(currentPage => NavigationActions.currentPageChanged({currentPage}))
  ));

  setNavbarState$ = createEffect(() => this.pageAndLoggedIn$.pipe(
    map(([currentPage, isLoggedIn]) => this.navigationService.getNavbarState(currentPage, isLoggedIn)),
    map((navigationState) => NavigationActions.navbarStateChanged({navigationState}))
  ));
}
