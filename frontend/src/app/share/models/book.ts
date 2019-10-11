import {User} from '@@share/models/user';

export interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  owner: User;
}
