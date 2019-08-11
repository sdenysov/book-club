import {UserModel} from '@@share/models/user.model';

export interface UserStateModel {
  loading: boolean;
  entry: UserModel;
}
