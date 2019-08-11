import {Injectable} from '@angular/core';
import {ProfileBooksReduxService} from '@@app/profile/services/profile-books-redux.service';
import {UserReduxService} from '@@user/services/user-redux.service';
import {RouterReduxService} from '@@router/services/router-redux.service';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {ProfileBooksActions} from '@@app/profile/store/profile-books.actions';
import {Observable, of} from 'rxjs/index';
import {catchError} from 'rxjs/internal/operators';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {BookModel} from '@@share/models/book.model';
import {HttpResponse} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProfileBooksService {

  constructor(private userReduxService: UserReduxService,
              private booksRestService: BooksRestService,
              private profileBooksReduxService: ProfileBooksReduxService,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private routerReduxService: RouterReduxService) {
  }

  fetchProfileBooks() {
    const user = this.userReduxService.getCurrentUser();
    this.profileBooksReduxService.fetchProfileBooks(user);
  }

  getBookById$(id: string): Observable<BookModel> {
    return this.booksRestService.getBookById$(id).pipe(
      catchError(error => {
        this.httpErrorHandlerService.handleErrorResponse(error);
        return of(error);
      })
    );
  }

  editBook$(book): Observable<HttpResponse<any>> {
    return this.booksRestService.editBook$(book).pipe(
      catchError(error => {
        this.httpErrorHandlerService.handleErrorResponse(error);
        return of(error);
      })
    );
  }
}
