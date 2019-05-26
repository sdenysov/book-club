import {Injectable} from '@angular/core';
import {UserBooksReduxService} from '@@app/profile/services/user-books-redux.service';
import {UserReduxService} from '@@user/services/user-redux.service';

@Injectable({providedIn: 'root'})
export class UserBooksService {

  constructor(private userReduxService: UserReduxService,
              private userBooksReduxService: UserBooksReduxService) {
  }

  fetchUserBooks() {
    const user = this.userReduxService.getCurrentUser();
    this.userBooksReduxService.fetchUserBooks(user);
  }
}
