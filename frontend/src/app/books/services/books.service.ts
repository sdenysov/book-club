import {BooksRestService} from '@@books/services/books-rest.service';
import {Observable, of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {Injectable} from '@angular/core';
import {IBook} from '@@books/models/book';
import {INewBook} from '@@books/models/new-book';

@Injectable({providedIn: 'root'})
export class BooksService {
  constructor(private booksRestService: BooksRestService,
              private httpErrorHandlerService: HttpErrorHandlerService) {}

  getBookById$(id: string): Observable<IBook> {
    return this.booksRestService.getBookById$(id).pipe(
      catchError(error => {
        this.httpErrorHandlerService.handleErrorResponse(error);
        return of(error);
      })
    );
  }

  addBook$(book: INewBook): Observable<HttpResponse<any>> {
    return this.booksRestService.addBook$(book).pipe(
      catchError(error => {
        this.httpErrorHandlerService.handleErrorResponse(error);
        return of(error);
      })
    );
  }

  editBook$(book: IBook): Observable<HttpResponse<any>> {
    return this.booksRestService.editBook$(book).pipe(
      catchError(error => {
        this.httpErrorHandlerService.handleErrorResponse(error);
        return of(error);
      })
    );
  }

  deleteBook$(bookId: string): Observable<HttpResponse<any>> {
    return this.booksRestService.deleteBook$(bookId).pipe(
      catchError(error => {
        this.httpErrorHandlerService.handleErrorResponse(error);
        return of(error);
      })
    );
  }
}
