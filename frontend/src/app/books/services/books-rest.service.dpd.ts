import {BooksRestService} from 'src/app/books/services/books-rest.service';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';
import {UrlProperties} from '@@shared/properties/url.properties';
import {ScreenLocking} from '@@screen-lock/decorators/screen-locking.decorator';
import {IBook} from '@@books/models/book';
import {SuggestionsMock} from '@@shared/mocks/books-suggestion.mock';
import {delay, switchMap} from 'rxjs/operators';
import {HttpUtils} from '@@shared/utils/http.utils';
import {UserRestService} from '@@user/services/user-rest.service';
import {IUser} from '@@shared/models/user';

@Injectable({providedIn: 'root'})
export class BooksRestServiceDpd implements BooksRestService {

  private baseUrl = `${UrlProperties.api}/books`;

  constructor(private http: HttpClient,
              private userRestService: UserRestService) {
  }

  @ScreenLocking()
  get$(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}?include=owners`);
  }

  suggest$(query: string): Observable<any> {
    console.log(query);
    switch (query) {
      case 'a':
        return of(SuggestionsMock.suggestion1).pipe(delay(1000));
      case 'ab':
        return of(SuggestionsMock.suggestion2).pipe(delay(2000));
      case 'abc':
        return of(SuggestionsMock.suggestion3).pipe(delay(3000));
      default:
        return EMPTY;
    }
    // return this.http.get<any>(`${this.baseUrl}/?suggest=${query}`);
  }

  addBook$(book: IBook): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.baseUrl, book, {headers: {'Content-Type': 'application/json'}});
  }

  getByUserId$(owner: string): Observable<IBook[]> {
    const params: HttpParams = HttpUtils.createQueryParams({owner});
    return this.http.get <IBook[]>(`${this.baseUrl}`, {params});
  }

  getByUserName$(username: string): Observable<IBook[]> {
    return this.userRestService.getUserByUserName$(username).pipe(
      switchMap((user: IUser) => this.getByUserId$(user.id))
    );
  }

  getBookById$(bookId: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.baseUrl}?include=owners&id=${bookId}`);
  }

  editBook$(book: IBook): Observable<HttpResponse<any>> {
    return this.http.put<HttpResponse<any>>(`${this.baseUrl}/${book.id}`, book);
  }
}
