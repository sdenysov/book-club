import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {ProfileBooksReduxService} from '@@app/profile/services/profile-books-redux.service';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {IBook} from '@@share/models/book.model';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({providedIn: 'root'})
export class ProfileBooksService {

  constructor(private userReduxFacade: AuthReduxFacade,
              private booksRestService: BooksRestService,
              private profileBooksReduxService: ProfileBooksReduxService,
              private httpErrorHandlerService: HttpErrorHandlerService) {
  }

  fetchProfileBooks() {
    const user = this.userReduxFacade.getLoggedInUser();
    this.profileBooksReduxService.fetchProfileBooks(user);
  }

  getBookById$(id: string): Observable<IBook> {
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
