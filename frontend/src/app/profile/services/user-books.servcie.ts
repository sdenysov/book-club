import {Injectable} from '@angular/core';
import {UserBooksReduxService} from '@@app/profile/services/user-books-redux.service';
import {UserReduxService} from '@@user/services/user-redux.service';
import {RouterReduxService} from '@@router/services/router-redux.service';

@Injectable({providedIn: 'root'})
  export class UserBooksService {

  constructor(private userReduxService: UserReduxService,
              private userBooksReduxService: UserBooksReduxService,
              private routerReduxService: RouterReduxService) {
  }

  fetchUserBooks() {
    const user = this.userReduxService.getCurrentUser();
    this.userBooksReduxService.fetchUserBooks(user);
  }

  fetchEditingBook() {
    const id: string = this.routerReduxService.getBookId();
    this.userBooksReduxService.fetchEditingBook(id);
  }
}
