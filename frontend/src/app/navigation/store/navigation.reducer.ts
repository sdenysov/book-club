import {INavigationState} from '@@app/navigation/models/navigation.model';
import {NavigationActions} from '@@app/navigation/store/navigation.actions';
import {Action, createReducer, on} from '@ngrx/store';

export const navigationInitialState: INavigationState = {
  navbar: {
    searchFieldVisible: false,
    loginBtnVisible: false,
    registerBtnVisible: false,
    userBtnVisible: false,
  },
  currentPage: null
};

const reducer = createReducer(navigationInitialState,
  on(NavigationActions.currentPageChanged, (state, {page}) => ({...state, currentPage: page})),
  on(NavigationActions.navbarStateChanged, (state, {navbar}) => ({...state, navbar})),
);

export function navigationReducer(state: INavigationState = navigationInitialState, actions: Action) {
  return reducer(state, actions);
}
