import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Book} from '@@share/models/book';
import {BooksRestService} from '@@core/services/books/books-rest.service';

@Injectable({providedIn: 'root'})
export class BooksRestServiceImpl implements BooksRestService {

  private baseUrl = `${this.api}/books`;

  constructor(@Inject('api') private api: string, private http: HttpClient) {}

  get$(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  suggest$(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?suggest=${query}`);
  }

  addBook$(book: Book): Observable<HttpResponse<any>> {
    console.log(JSON.stringify(book));
    return this.http.post<HttpResponse<any>>(this.baseUrl, book, {headers: {'Content-Type': 'application/json'}});
  }

  getByUserId$(userId: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/?user-id=${userId}`);
  }

  getBookById$(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/?book-id=${bookId}`);
  }

  editBook$(book: Book): Observable<HttpResponse<any>> {
    return of(new HttpResponse());
  }
}
