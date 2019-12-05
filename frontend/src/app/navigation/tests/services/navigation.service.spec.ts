import {INavbar} from '@@navigation/models/navbar.model';
import {Page} from '@@navigation/models/page';
import {NavigationService} from '@@navigation/services/navigation.service';

interface ITestCase {
  page: Page;
  loggedIn: boolean;
  expected: INavbar;
}

describe('NavigationServiceSpec', () => {

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

  const testCases: ITestCase[] = [
    {page: Page.MAIN, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.MAIN, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.SEARCH_BOOK, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.SEARCH_BOOK, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.PROFILE, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.PROFILE, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.EDIT_PROFILE, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.EDIT_PROFILE, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.PROFILE_SETTINGS, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.PROFILE_SETTINGS, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.BOOKS, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.BOOKS, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.NEW_BOOK, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.NEW_BOOK, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.BOOK_DETAILS, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.BOOK_DETAILS, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.EDIT_BOOK, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.EDIT_BOOK, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.NOT_FOUND, loggedIn: true, expected: defaultNavbarForLoggedIn},
    {page: Page.NOT_FOUND, loggedIn: false, expected: defaultNavbarForNotLoggedIn},
    {page: Page.LOGIN, loggedIn: true, expected: navbarForLoginPage},
    {page: Page.LOGIN, loggedIn: false, expected: navbarForLoginPage},
    {page: Page.REGISTER, loggedIn: true, expected: navbarForRegisterPage},
    {page: Page.REGISTER, loggedIn: false, expected: navbarForRegisterPage},
  ];

  const navigationService: NavigationService = new NavigationService();

  it('should get correct state according to current page and login status', () => {
    testCases.forEach(testCase => {
      const navbarState = navigationService.getNavbarState(testCase.page, testCase.loggedIn);
      expect(navbarState).toEqual(testCase.expected);
    });
  });
});