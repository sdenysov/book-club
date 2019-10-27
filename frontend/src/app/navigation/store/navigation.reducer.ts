import {createReducer} from '@ngrx/store/src/reducer_creator';
import {NavigationState} from '@@navigation/models/navigation-state.model';
import {Action, on} from '@ngrx/store';
import {NavigationActions} from '@@navigation/store/navigation.actions';

const initialState: NavigationState = {
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
  ));

export function navigationReducer(state: NavigationState = initialState, action: Action) {
  return reducer(state, action);
}
