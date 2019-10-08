import {User} from '@@share/models/user';

export interface BookModel {
  id: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  owner: User;
}
