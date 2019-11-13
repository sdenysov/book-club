import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {Action} from '@ngrx/store';
import {PageService} from '@@navigation/services/page.service';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {Page} from '@@navigation/models/page';
import {NavigationEffects} from '@@navigation/store/navigation.effects';
import {NavigationActions, NavigationActionTypes} from '@@navigation/store/navigation.actions';
import {RouterTestingModule} from '@angular/router/testing';
import {NavigationService} from '@@navigation/services/navigation.service';
import {initialState} from '@@navigation/store/navigation.reducer';
import {AuthService} from '@@auth/services/auth.service';
import {cold} from 'jasmine-marbles';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';

class AuthServiceMock {
  isLoggedIn$: Observable<boolean> = cold('--a', {a: true});
}

class NavigationReduxFacadeMock {
  currentPage$: Observable<Page> = cold('-a', {a: Page.MAIN});
}

describe('NavigationEffectsSpec', () => {
  let actions$: Observable<Action>;
  let pageService: PageService;
  let authService: AuthService;
  let effects: NavigationEffects;
  let navigationService: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        NavigationEffects,
        {provide: NavigationReduxFacade, useClass: NavigationReduxFacadeMock},
        {provide: AuthService, useClass: AuthServiceMock},
        provideMockActions(() => actions$)
      ],
    });
    pageService = TestBed.get(PageService);
    navigationService = TestBed.get(NavigationService);
    authService = TestBed.get(AuthService);
    effects = TestBed.get(NavigationEffects);
  });

  it('should pageService be created', () => {
    expect(pageService).toBeTruthy();
  });

  it('should emit updateCurrentPageAction on navigation', () => {
    actions$ = new ReplaySubject(1);
    const routerNavigatedAction = {
      type: ROUTER_NAVIGATED,
      payload: {routerState: {url: 'someourl'}}
    };
    (actions$ as ReplaySubject<Action>).next(routerNavigatedAction);
    spyOn(pageService, 'getPageByUrl').and.returnValue(Page.MAIN);
    effects.updateCurrentPage$.subscribe(resultActions => {
      expect(resultActions.type).toBe(NavigationActionTypes.CURRENT_PAGE_CHANGED);
      expect(resultActions.currentPage).toBe(Page.MAIN);
    });
  });

  it('should emit updateNavigationStateAction', () => {
    const getNavbarStateSpy = spyOn(navigationService, 'getNavbarState').and.returnValue(initialState);
    effects.setNavbarState$.subscribe(resultActions => {
      expect(getNavbarStateSpy).toHaveBeenCalledWith(Page.MAIN, true);
      expect(resultActions.type).toBe(NavigationActionTypes.NAVBAR_STATE_CHANGED);
      expect(resultActions.navigationState).toBe(initialState);
    });
  });
});
