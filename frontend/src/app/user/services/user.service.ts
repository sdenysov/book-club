import {Injectable} from '@angular/core';
import {UserReduxService} from '@@user/services/user-redux.service';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private userReduxService: UserReduxService) {}

  init() {
    // TODO When we should call fetchCurrentUser?
    if (!this.userReduxService.isCurrentUserExists()) {
      this.userReduxService.fetchCurrentUser();
    }
  }
}
