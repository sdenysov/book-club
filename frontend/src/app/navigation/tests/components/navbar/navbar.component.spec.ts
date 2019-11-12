import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {NavBarComponent} from '@@navigation/components/navbar/navbar.component';
import {INavbar} from '@@navigation/models/navbar.model';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {IconComponent} from '@@share/components/icon/icon.component';
import {IUser} from '@@share/models/user.model';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {cold} from 'jasmine-marbles';
import {Observable} from 'rxjs';

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

class AuthReduxFacadeMock {
  loggedInUser$: Observable<IUser>;
}

class NavigationReduxFacadeMock {
  navbar$: Observable<INavbar>;
}

describe('NavbarComponentSpec', () => {

  let navbarComponent: NavBarComponent;
  let navigationReduxFacade: NavigationReduxFacade;
  let authReduxFacade: AuthReduxFacade;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FontAwesomeModule
      ],
      declarations: [NavBarComponent, IconComponent],
      providers: [
        {provide: AuthReduxFacade, useClass: AuthReduxFacadeMock},
        {provide: NavigationReduxFacade, useClass: NavigationReduxFacadeMock}
      ]
    });
    navigationReduxFacade = TestBed.get(NavigationReduxFacade);
    authReduxFacade = TestBed.get(AuthReduxFacade);
    fixture = TestBed.createComponent(NavBarComponent);
    navbarComponent = fixture.componentInstance;
  });

  it('should create', () => {
    expect(navbarComponent).toBeDefined();
  });

  it('should hide/show navbar elements according to navbar state', () => {
    const user = {id: '12345', username: 'username'};
    authReduxFacade.loggedInUser$ = cold('-a', {a: user});
    navigationReduxFacade.navbar$ = cold('-a-b-c-d-e-', {
      a: null,
      b: defaultNavbarForLoggedIn,
      c: defaultNavbarForNotLoggedIn,
      d: navbarForLoginPage,
      e: navbarForRegisterPage
    });
    fixture.detectChanges(); // ngOnInit

    expect(navbarComponent.vm$).toBeObservable(cold('-a-b-c-d-e-', {
      a: {user, navbar: null},
      b: {user, navbar: defaultNavbarForLoggedIn},
      c: {user, navbar: defaultNavbarForNotLoggedIn},
      d: {user, navbar: navbarForLoginPage},
      e: {user, navbar: navbarForRegisterPage}
    }));
  });
});

