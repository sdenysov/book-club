import {BooksRestService} from '@@core/services/books/books-rest.service';
import {ScreenLocking} from '@@screen-lock/decorators/screen-locking.decorator';
import {BookModel} from '@@share/models/book.model';
import {UrlProperties} from '@@share/properties/url.properties';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class BooksRestServiceDpd implements BooksRestService {

  private baseUrl = `${UrlProperties.api}/books`;

  constructor(private http: HttpClient) {}

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

  editBook$(book: BookModel): Observable<HttpResponse<any>> {
    return this.http.put<HttpResponse<any>>(`${this.baseUrl}/${book.id}`, book);
  }
}
