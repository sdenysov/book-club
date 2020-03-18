import {IUser} from '@@shared/models/user';

export interface IBook {
  id: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  owner: IUser;
}
