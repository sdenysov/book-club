import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {ProfileBooksReduxService} from '@@app/profile/services/profile-books-redux.service';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {BooksRestService} from '@@books/services/books-rest.service';
import {IBook} from '@@books/models/book';

@Injectable({providedIn: 'root'})
export class ProfileBooksService {

  constructor(private userReduxFacade: AuthReduxFacade,
              private booksRestService: BooksRestService,
              private profileBooksReduxService: ProfileBooksReduxService) {
  }

  fetchProfileBooks() {
    const user = this.userReduxFacade.getUser();
    this.profileBooksReduxService.fetchProfileBooks(user);
  }

}
