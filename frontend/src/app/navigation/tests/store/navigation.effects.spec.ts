import {AuthService} from '@@auth/services/auth.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {AuthActions} from '@@auth/store/auth.actions';
import {AuthSelectors} from '@@auth/store/auth.selectors';
import {INavbar} from '@@navigation/models/navbar.model';
import {Page} from '@@navigation/models/page';
import {PageService} from '@@navigation/services/page.service';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {NavigationEffects} from '@@navigation/store/navigation.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {Action} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {hot} from 'jasmine-marbles';
import {Observable, ReplaySubject} from 'rxjs';
import NAVBAR_STATE_CHANGED = NavigationActions.NAVBAR_STATE_CHANGED;

class NavigationReduxFacadeMock {
  currentPage$: Observable<Page> = hot('-a', {a: Page.MAIN});
}

class AuthServiceMock {
  isLoggedIn$: Observable<boolean> = hot('---a', {a: true});
}

fdescribe('NavigationEffectsSpec', () => {

  let actions$: Observable<Action>;
  let pageService: PageService;
  let effects: NavigationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore({
          selectors: [
            {selector: AuthSelectors.isLoggedIn, value: true}
          ],
        }),
        provideMockActions(() => actions$),
        PageService,
        AuthReduxFacade,
        {provide: NavigationReduxFacade, useClass: NavigationReduxFacadeMock},
        {provide: AuthService, useClass: AuthServiceMock},
        NavigationEffects
      ],
    });
    pageService = TestBed.get(PageService);
    effects = TestBed.get(NavigationEffects);
  });

  it('should emit action with page appropriated current url', () => {
    actions$ = new ReplaySubject(1);
    const routerNavigatedAction = {
      type: ROUTER_NAVIGATED,
      payload: {routerState: {url: '/some-url'}}
    };
    (actions$ as ReplaySubject<Action>).next(routerNavigatedAction);
    spyOn(pageService, 'getPageByUrl').and.returnValue(Page.MAIN);
    effects.updateCurrentPage$.subscribe(resultAction => {
      expect(resultAction.type).toBe(NavigationActions.CURRENT_PAGE_CHANGED);
      expect(resultAction.page).toBe(Page.MAIN);
    });
  });

  it('should emit action with new navbar state after current page changed', () => {
    actions$ = hot('--a-', {a: NavigationActions.currentPageChanged({page: Page.LOGIN})});
    const navbar: INavbar = {
      loginBtnVisible: false,
      registerBtnVisible: true,
      searchFieldVisible: false,
      userBtnVisible: false
    };
    effects.updateNavStateOnPageChange$.subscribe(resultActions => {
      expect(resultActions.type).toBe(NAVBAR_STATE_CHANGED);
      expect(resultActions.navbar).toEqual(navbar);
    });
  });

  it('should emit action with new navbar state after loggedIn status changed', () => {
    actions$ = hot('--a-', {a: AuthActions.setLoggedInStatus({loggedIn: true})});
    const navbar: INavbar = {
      loginBtnVisible: false,
      registerBtnVisible: false,
      searchFieldVisible: true,
      userBtnVisible: true
    };
    effects.updateNavStateOnLoggedInChange$.subscribe(resultActions => {
      expect(resultActions.type).toBe(NAVBAR_STATE_CHANGED);
      expect(resultActions.navbar).toEqual(navbar);
    });
  });
});
