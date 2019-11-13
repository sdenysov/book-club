import {INavigationState} from '@@navigation/models/navigation-state.model';
import {Action, createReducer, on} from '@ngrx/store';
import {NavigationActions} from '@@navigation/store/navigation.actions';

export const initialState: INavigationState = {
  navbar: {
    loginBtnVisible: false,
    registerBtnVisible: false,
    searchFieldVisible: false,
    userBtnVisible: false
  },
  currentPage: null
};

const reducer = createReducer(initialState,
  on(
    NavigationActions.currentPageChanged,
    (state, {currentPage}) => ({...state, currentPage: currentPage})
  ),
  on(
    NavigationActions.navbarStateChanged,
    (state, {navigationState}) => ({...state, navbar: navigationState})
  )
);

export function navigationReducer(state: INavigationState = initialState, action: Action) {
  return reducer(state, action);
}
