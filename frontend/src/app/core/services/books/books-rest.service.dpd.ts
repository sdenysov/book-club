import {BooksRestService} from '@@core/services/books/books-rest.service';
import {ScreenLocking} from '@@screen-lock/decorators/screen-locking.decorator';
import {IBook} from '@@share/models/book';
import {UrlProperties} from '@@share/properties/url.properties';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class BooksRestServiceDpd implements BooksRestService {

  private baseUrl = `${UrlProperties.api}/books`;

  constructor(private http: HttpClient) {}

  @ScreenLocking()
  get$(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}?include=owners`);
  }

  suggest$(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?suggest=${query}`);
  }

  addBook$(book: IBook): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.baseUrl, book, {headers: {'Content-Type': 'application/json'}});
  }

  getByUserId$(userId: string): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}?include=owners&owners.id=${userId}`);
  }

  getBookById$(bookId: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.baseUrl}?include=owners&id=${bookId}`);
  }

  editBook$(book: IBook): Observable<HttpResponse<any>> {
    return this.http.put<HttpResponse<any>>(`${this.baseUrl}/${book.id}`, book);
  }
}
