import {AuthService} from '@@auth/services/auth.service';
import {INavbar} from '@@navigation/models/navbar.model';
import {Page} from '@@navigation/models/page';
import {PageService} from '@@navigation/services/page.service';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {NavigationEffects} from '@@navigation/store/navigation.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {EffectsModule} from '@ngrx/effects';
import {provideMockActions} from '@ngrx/effects/testing';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {Action} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {hot} from 'jasmine-marbles';
import {Observable} from 'rxjs';
import NAVBAR_STATE_CHANGED = NavigationActions.NAVBAR_STATE_CHANGED;

class NavigationReduxFacadeMock {
  currentPage$: Observable<Page> = hot('-a', {a: Page.MAIN});
}

class AuthServiceMock {
  isLoggedIn$: Observable<boolean> = hot('---a', {a: true});
}

describe('NavigationEffectsSpec', () => {

  let actions$: Observable<Action>;
  let pageService: PageService;
  let effects: NavigationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        EffectsModule.forRoot([NavigationEffects])
      ],
      providers: [
        provideMockStore({}),
        provideMockActions(() => actions$),
        PageService,
        {provide: NavigationReduxFacade, useClass: NavigationReduxFacadeMock},
        {provide: AuthService, useClass: AuthServiceMock}
      ],
    });
    pageService = TestBed.get(PageService);
    effects = TestBed.get(NavigationEffects);
  });

  it('should emit action with page appropriated current url', () => {
    actions$ = hot('-a-', {a: {type: ROUTER_NAVIGATED}});
    spyOn(pageService, 'getPageByUrl').and.returnValue(Page.MAIN);
    const expected = hot('-a', {
      a: {type: NavigationActions.CURRENT_PAGE_CHANGED, page: Page.MAIN}
    });
    expect(effects.updateCurrentPage$).toBeObservable(expected);
  });

  it('should emit action with new navbar state after current page or user login status changed', () => {
    const navbar: INavbar = {
      loginBtnVisible: false,
      registerBtnVisible: false,
      searchFieldVisible: true,
      userBtnVisible: true
    };
    const expected = hot('---a', {a: {type: NAVBAR_STATE_CHANGED, navbar}});
    expect(effects.navigationState$).toBeObservable(expected);
  });
});
