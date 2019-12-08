import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {ROUTER_NAVIGATED, RouterNavigatedAction} from '@ngrx/router-store';
import {map, withLatestFrom} from 'rxjs/operators';
import {PageService} from '../services/page.service';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {NavigationService} from '@@navigation/services/navigation.service';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {AuthActions} from '@@auth/store/auth.actions';
import {INavbar} from '@@navigation/models/nav-bar.model';

@Injectable()
export class NavigationEffects {

  constructor(private actions$: Actions,
              private pageService: PageService,
              private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade,
              private navigationService: NavigationService) {
  }

  updateCurrentPage$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map((action: RouterNavigatedAction) => action.payload.routerState.url),
    map(currentUrl => this.pageService.getPageByUrl(currentUrl)),
    map(currentPage => NavigationActions.currentPageChanged({currentPage}))
  ));

  updateNavStateOnPageChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NavigationActions.currentPageChanged),
      withLatestFrom(this.authReduxFacade.isLoggedIn$),
      map(([{currentPage}, loggedIn]) => this.navigationService.getNavbarState(currentPage, loggedIn)),
      map((navigationState: INavbar) => NavigationActions.navbarStateChanged({navigationState}))
    );
  });

  updateNavStateOnLoggedInChange$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout, AuthActions.fetchLoggedInUserSucceed, AuthActions.fetchLoggedInUserFailed),
    withLatestFrom(this.authReduxFacade.isLoggedIn$, this.navigationReduxFacade.currentPage$),
    map(([_, loggedIn, page]) => this.navigationService.getNavbarState(page, loggedIn)),
    map((navigationState: INavbar) => NavigationActions.navbarStateChanged({navigationState}))
  ));
}
