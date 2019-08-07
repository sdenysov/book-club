import {Injectable} from '@angular/core';
import {ProfileBooksReduxService} from '@@app/profile/services/profile-books-redux.service';
import {UserReduxService} from '@@user/services/user-redux.service';
import {RouterReduxService} from '@@router/services/router-redux.service';
import {BookModel} from '@@share/models/book.model';

@Injectable({providedIn: 'root'})
  export class ProfileBooksService {

  constructor(private userReduxService: UserReduxService,
              private profileBooksReduxService: ProfileBooksReduxService,
              private routerReduxService: RouterReduxService) {
  }

  fetchProfileBooks() {
    const user = this.userReduxService.getCurrentUser();
    this.profileBooksReduxService.fetchProfileBooks(user);
  }

  fetchEditingBook() {
    const id: string = this.routerReduxService.getBookId();
    this.profileBooksReduxService.fetchEditingBook(id);
  }

  editBook(book) {
    this.profileBooksReduxService.editBook(book);
  }
}
