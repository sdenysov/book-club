import {AuthService} from '@@auth/services/auth.service';
import {Navbar} from '@@navigation/models/navbar.model';
import {NavigationService} from '@@navigation/services/navigation.service';
import {PageService} from '@@navigation/services/page.service';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class NavigationEffects {

  private readonly pageAndLoggedIn$ = combineLatest([
    this.navigationReduxFacade.currentPage$,
    this.authService.isLoggedIn$,
  ]);

  constructor(private actions$: Actions,
              private pageService: PageService,
              private navigationService: NavigationService,
              private navigationReduxFacade: NavigationReduxFacade,
              private authService: AuthService,
              private router: Router) {
  }

  updateCurrentPage$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map(() => this.pageService.getCurrentPage(this.router.url)),
    map(page => NavigationActions.currentPageChanged({page}))
  ));

  navigationState$ = createEffect(() => this.pageAndLoggedIn$.pipe(
    map(([page, loggedIn]) => this.navigationService.getNavbarState(page, loggedIn)),
    map((navbar: Navbar) => NavigationActions.navbarStateChanged({navbar}))
  ));
}

