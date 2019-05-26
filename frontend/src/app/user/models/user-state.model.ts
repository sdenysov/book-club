import {UserModel} from '@@user/models/user.model';

export interface UserStateModel {
  loading: boolean;
  entry: UserModel;
}
