import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BookModel} from '@@share/models/book.model';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {ScreenLockReduxService} from '@@app/screen-lock/services/screen-lock-redux.service';
import {finalize, map, tap} from 'rxjs/internal/operators';
import {ScreenLocking} from '@@screen-lock/decorators/screen-locking.decorator';

@Injectable({providedIn: 'root'})
export class BooksRestServiceDpd implements BooksRestService {

  private baseUrl = `${this.api}/books`;

  constructor(@Inject('api') private api: string,
              private http: HttpClient,
              private screenLockReduxService: ScreenLockReduxService) {
  }

  @ScreenLocking()
  get$(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(`${this.baseUrl}?include=owners`);
  }

  suggest$(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?suggest=${query}`);
  }

  addBook$(book: BookModel): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.baseUrl, book, {headers: {'Content-Type': 'application/json'}});
  }

  getByUserId$(userId: string): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(`${this.baseUrl}?include=owners&owners.id=${userId}`);
  }

  getBookById$(bookId: string): Observable<BookModel> {
    return this.http.get<BookModel>(`${this.baseUrl}?include=owners&id=${bookId}`);
  }

  editBook$(book: BookModel){
    return this.http.put<BookModel>(`${this.baseUrl}/${book.id}`, book);
  }
}
