import {PageAccessLevel} from '@@user/models/page-access-level';

export interface UserState {
  observingUsername: string;
  pageAccessLevel: PageAccessLevel;
}
