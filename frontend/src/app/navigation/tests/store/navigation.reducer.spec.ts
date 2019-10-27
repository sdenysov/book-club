import {INavbar} from '@@navigation/models/navbar.model';
import {INavigationState} from '@@navigation/models/navigation.model';
import {Page} from '@@navigation/models/page';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {navigationReducer, navigationInitialState} from '@@navigation/store/navigation.reducer';
import {Action} from '@ngrx/store';

describe('NavigationReducerSpec', () => {

  it('should update current page on CURRENT_PAGE_CHANGED action', () => {
    const action: Action = NavigationActions.currentPageChanged({page: Page.MAIN});
    const resultState = navigationReducer(navigationInitialState, action);
    const expectedState: INavigationState = {...navigationInitialState, currentPage: Page.MAIN};
    expect(resultState).toEqual(expectedState);
  });

  it('should update navigation state on NAVBAR_STATE_CHANGED action', () => {
    const navbar: INavbar = {
      loginBtnVisible: false,
      registerBtnVisible: false,
      searchFieldVisible: true,
      userBtnVisible: true
    };
    const action: Action = NavigationActions.navbarStateChanged({navbar});
    const resultState = navigationReducer(navigationInitialState, action);
    const expectedState: INavigationState = {...navigationInitialState, navbar};
    expect(resultState).toEqual(expectedState);
  });
});
