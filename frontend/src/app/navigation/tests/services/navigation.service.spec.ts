import {Page} from '@@navigation/models/page';
import {NavigationService} from '@@navigation/services/navigation.service';
import {INavbar} from '@@navigation/models/nav-bar.model';

interface INavDefineTestCase {
  userLoggedIn: boolean;
  expectedState: INavbar;
  page: Page;
}

const defaultNavbarForLoggedInUser = {
  loginBtnVisible: false,
  registerBtnVisible: false,
  searchFieldVisible: true,
  userBtnVisible: true
};

const defaultNavbarForNotLoggedInUser = {
  loginBtnVisible: true,
  registerBtnVisible: true,
  searchFieldVisible: true,
  userBtnVisible: false
};

const loginNavbar = {
  loginBtnVisible: false,
  registerBtnVisible: true,
  searchFieldVisible: false,
  userBtnVisible: false
};

const registerNavbar = {
  loginBtnVisible: true,
  registerBtnVisible: false,
  searchFieldVisible: false,
  userBtnVisible: false
};

describe('NavigationServiceSpec', () => {

  const navigationService: NavigationService = new NavigationService();
  const testCases: INavDefineTestCase[] = [
    {page: Page.MAIN, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.SEARCH_BOOK, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.BOOKS, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.EDIT_BOOK, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.NEW_BOOK, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.BOOK_DETAILS, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.PROFILE, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.EDIT_PROFILE, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.PROFILE_SETTINGS, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.NOT_FOUND, userLoggedIn: true, expectedState: defaultNavbarForLoggedInUser},
    {page: Page.MAIN, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.SEARCH_BOOK, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.BOOKS, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.EDIT_BOOK, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.NEW_BOOK, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.BOOK_DETAILS, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.PROFILE, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.EDIT_PROFILE, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.PROFILE_SETTINGS, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.NOT_FOUND, userLoggedIn: false, expectedState: defaultNavbarForNotLoggedInUser},
    {page: Page.LOGIN, userLoggedIn: true, expectedState: loginNavbar},
    {page: Page.REGISTER, userLoggedIn: true, expectedState: registerNavbar},
    {page: Page.LOGIN, userLoggedIn: false, expectedState: loginNavbar},
    {page: Page.REGISTER, userLoggedIn: false, expectedState: registerNavbar}
  ];

  it('should recognize navigation state depend on page and user login status', () => {
    testCases.forEach(testCase => {
      const navigationState = navigationService.getNavbarState(testCase.page, testCase.userLoggedIn);
      expect(navigationState).toEqual(testCase.expectedState);
    });
  });
});
