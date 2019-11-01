import {NavBarComponent} from '@@navigation/components/navbar/navbar.component';
import {INavbar} from '@@navigation/models/navbar.model';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {cold, hot} from 'jasmine-marbles';
import {map} from 'rxjs/operators';

const defaultNavbarForLoggedIn: INavbar = {
  loginBtnVisible: false,
  registerBtnVisible: false,
  searchFieldVisible: true,
  userBtnVisible: true
};

const defaultNavbarForNotLoggedIn: INavbar = {
  loginBtnVisible: true,
  registerBtnVisible: true,
  searchFieldVisible: true,
  userBtnVisible: false
};

const navbarForLoginPage: INavbar = {
  loginBtnVisible: false,
  registerBtnVisible: true,
  searchFieldVisible: false,
  userBtnVisible: false
};

const navbarForRegisterPage: INavbar = {
  loginBtnVisible: true,
  registerBtnVisible: false,
  searchFieldVisible: false,
  userBtnVisible: false
};

class NavigationReduxFacadeMock {

  navbar$ = hot('-a-b-c-d-e-', {
    a: null,
    b: defaultNavbarForLoggedIn,
    c: defaultNavbarForNotLoggedIn,
    d: navbarForLoginPage,
    e: navbarForRegisterPage
  });
}

describe('NavbarComponentSpec', () => {

  let navbarComponent: NavBarComponent;
  let navigationReduxFacade: NavigationReduxFacade;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      providers: [
        {provide: NavigationReduxFacade, useClass: NavigationReduxFacadeMock}
      ]
    }).compileComponents().then(() => {
      navigationReduxFacade = TestBed.get(NavigationReduxFacade);
      fixture = TestBed.createComponent(NavBarComponent);
      navbarComponent = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(navbarComponent).toBeDefined();
  });

  it('should hide/show navbar elements according to navbar state', () => {
    const navbarTemplateState = navigationReduxFacade.navbar$.pipe(map(() => {
        fixture.detectChanges();
        const navbarElement = fixture.nativeElement.querySelector('.navbar');
        return navbarElement && {
          loginBtnVisible: Boolean(navbarElement.querySelector('.login-btn')),
          registerBtnVisible: Boolean(navbarElement.querySelector('.register-btn')),
          searchFieldVisible: Boolean(navbarElement.querySelector('.navbar-form')),
          userBtnVisible: Boolean(navbarElement.querySelector('.profile-dropdown')),
        };
      })
    );

    const expected$ = cold('-a-b-c-d-e-', {
      a: null,
      b: defaultNavbarForLoggedIn,
      c: defaultNavbarForNotLoggedIn,
      d: navbarForLoginPage,
      e: navbarForRegisterPage
    });

    expect(navbarTemplateState).toBeObservable(expected$);
  });
});

