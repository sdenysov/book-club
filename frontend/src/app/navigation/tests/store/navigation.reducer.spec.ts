import {Page} from '@@navigation/models/page';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {navigationReducer} from '@@navigation/store/navigation.reducer';
import {INavigationState} from '@@navigation/models/navigation-state.model';
import {INavbar} from '@@navigation/models/nav-bar.model';

describe('NavigationReducerSpec', () => {

  describe('[Navbar] CurrentPageChanged', () => {
    const initialState: INavigationState = {
      navbar: {
        loginBtnVisible: false,
        registerBtnVisible: false,
        searchFieldVisible: false,
        userBtnVisible: false
      },
      currentPage: null
    };

    it('should current page be updated in store', () => {
      const currentPage = Page.MAIN;
      const action = NavigationActions.currentPageChanged({currentPage});
      const result = navigationReducer(initialState, action);
      expect(result).toEqual({...initialState, currentPage});
    });

    it('should navbar state be updated in store', () => {
      const navigationState: INavbar = {
        loginBtnVisible: true,
        registerBtnVisible: true,
        searchFieldVisible: true,
        userBtnVisible: true
      };
      const action = NavigationActions.navbarStateChanged({ navigationState });
      const result = navigationReducer(initialState, action);
      expect(result).toEqual({...initialState, navbar: navigationState});
    });
  });
});
