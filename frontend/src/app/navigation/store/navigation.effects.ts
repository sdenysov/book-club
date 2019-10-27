import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {first, map} from 'rxjs/operators';
import {PageService} from '../services/page.service';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';

@Injectable()
export class NavigationEffects {

  constructor(private actions$: Actions,
              private pageService: PageService,
              private navigationReduxFacade: NavigationReduxFacade) {

  }

  catchCurrentPage$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map(() => this.pageService.currentPage$.pipe(first()).subscribe(currentPage => currentPage)),
    map((currentPage) => NavigationActions.currentPageChanged({currentPage}))
  ));

  setNavbarState$ = createEffect(() => this.actions$.pipe(
    ofType(NavigationActions.currentPageChanged),
    map(() => this.navigationReduxFacade.pageAndLoggedIn$),
    map((currentPage) => NavigationActions.currentPageChanged({currentPage}))
  ));
}
