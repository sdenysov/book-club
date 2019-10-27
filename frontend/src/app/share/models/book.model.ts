import {IUser} from '@@share/models/user.model';

export interface IBook {
  id: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  owner: IUser;
}
