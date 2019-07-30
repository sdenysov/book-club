import {UserModel} from '@@user/models/user.model';

export interface BookModel {
  id: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  owner: UserModel;
}
