import {IUser} from '@@share/models/user';

export interface IBook {
  id: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  owner: IUser;
}
