import {PageAccessLevel} from '@@user/models/page-access-level';

export interface IUserState {
  observingUsername: string;
  pageAccessLevel: PageAccessLevel;
}
