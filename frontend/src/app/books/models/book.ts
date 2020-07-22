import {IUser} from '@@shared/models/user';

export abstract class IBook {
  id: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  owner: IUser;
}
