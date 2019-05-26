import {UserStateModel} from '@@user/models/user-state.model';
import {TUserAction, UserActionTypes} from '@@user/store/user.actions';

const initialState: UserStateModel = {
  loading: false,
  entry: null
};

export function userReducer(state: UserStateModel = initialState, action: TUserAction): UserStateModel {
  switch (action.type) {
    case UserActionTypes.FetchCurrentUser: {
      return {...state, loading: true};
    }
    case UserActionTypes.FetchCurrentUserSucceed: {
      return {...state, loading: false, entry: action.currentUser};
    }
    case UserActionTypes.FetchCurrentUserFailed: {
      return {...state, loading: false};
    }
    default: {
      return state;
    }
  }
}
