import {IAuthState} from '@@auth/models/auth-state.model';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {AUTH_STORE_KEY} from '@@auth/store/auth-store.properties';
import {AuthActions} from '@@auth/store/auth.actions';
import {INavbar} from '@@navigation/models/navbar.model';
import {INavigationState} from '@@navigation/models/navigation.model';
import {Page} from '@@navigation/models/page';
import {NavigationService} from '@@navigation/services/navigation.service';
import {PageService} from '@@navigation/services/page.service';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {NAVIGATION_STORE_KEY} from '@@navigation/store/navigation-store.properties';
import {NavigationActions, NavigationActionTypes} from '@@navigation/store/navigation.actions';
import {NavigationEffects} from '@@navigation/store/navigation.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {Action, Store} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {Observable, of} from 'rxjs';

describe('NavigationEffectsSpec', () => {

  let actions$: Observable<Action>;
  let pageService: PageService;
  let effects: NavigationEffects;
  let navigationService: NavigationService;
  let navigationReduxFacade: NavigationReduxFacade;
  let authReduxFacade: AuthReduxFacade;
  let store: MockStore<{
    [AUTH_STORE_KEY]: IAuthState
    [NAVIGATION_STORE_KEY]: INavigationState
  }>;

  const initialState = {
    [AUTH_STORE_KEY]: {} as IAuthState,
    [NAVIGATION_STORE_KEY]: {} as INavigationState
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        NavigationEffects,
        NavigationService,
        NavigationReduxFacade,
        AuthReduxFacade,
        PageService,
        provideMockStore({initialState}),
        provideMockActions(() => actions$),
      ],
    });
    store = TestBed.get(Store);
    effects = TestBed.get(NavigationEffects);
    pageService = TestBed.get(PageService);
    navigationService = TestBed.get(NavigationService);
    navigationReduxFacade = TestBed.get(NavigationReduxFacade);
    authReduxFacade = TestBed.get(AuthReduxFacade);
  });

  it('should emit action with page appropriated current url', () => {
    const url = '/url';
    actions$ = of({type: ROUTER_NAVIGATED, payload: {routerState: {url}}});
    const getPageByUrlSpy = spyOn(pageService, 'getPageByUrl').and.returnValue(Page.MAIN);
    effects.updateCurrentPage$.subscribe(resultAction => {
      expect(getPageByUrlSpy).toHaveBeenCalledWith(url);
      expect(resultAction.type).toBe(NavigationActionTypes.CURRENT_PAGE_CHANGED);
      expect(resultAction.page).toBe(Page.MAIN);
    });
  });

  it('should emit action with new navbar state after current page changed', () => {
    const page = Page.LOGIN;
    const loggedIn = false;
    actions$ = of(NavigationActions.currentPageChanged({page}));
    store.setState({
      ...initialState,
      [AUTH_STORE_KEY]: {loggedIn} as IAuthState
    });
    const navbar: INavbar = {
      loginBtnVisible: false,
      registerBtnVisible: true,
      searchFieldVisible: false,
      userBtnVisible: false
    };
    const getNavbarStateSpy = spyOn(navigationService, 'getNavbarState').and.returnValue(navbar);
    effects.updateNavStateOnPageChange$.subscribe(resultActions => {
      expect(getNavbarStateSpy).toHaveBeenCalledWith(page, loggedIn);
      expect(resultActions.type).toBe(NavigationActionTypes.NAVBAR_STATE_CHANGED);
      expect(resultActions.navbar).toEqual(navbar);
    });
  });

  it('should emit action with new navbar state after loggedIn status changed', () => {
    const loggedIn = true;
    const currentPage = Page.LOGIN;
    actions$ = of(
      AuthActions.logout(),
      AuthActions.fetchLoggedInUser(),
      AuthActions.fetchLoggedInUserFailed()
    );
    const navbar: INavbar = {
      loginBtnVisible: false,
      registerBtnVisible: false,
      searchFieldVisible: true,
      userBtnVisible: true
    };
    store.setState({
      ...initialState,
      [NAVIGATION_STORE_KEY]: {currentPage} as INavigationState,
      [AUTH_STORE_KEY]: {loggedIn: true} as IAuthState
    });
    const getNavbarStateSpy = spyOn(navigationService, 'getNavbarState').and.returnValue(navbar);
    effects.updateNavStateOnLoggedInChange$.subscribe(resultActions => {
      expect(getNavbarStateSpy).toHaveBeenCalledWith(currentPage, loggedIn);
      expect(resultActions.type).toBe(NavigationActionTypes.NAVBAR_STATE_CHANGED);
      expect(resultActions.navbar).toEqual(navbar);
    });
  });
});
