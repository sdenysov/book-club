import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Book} from '@@share/models/book';
import {EnvUtils} from '@@share/utils/env.utils';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('BooksRestService')})
export abstract class BooksRestService {

  abstract get$(): Observable<Book[]>;

  abstract suggest$(query: string): Observable<any>;

  abstract addBook$(book: Book): Observable<HttpResponse<any>>;

  abstract getByUserId$(userId: string): Observable<Book[]>;

  abstract getBookById$(bookId: string): Observable<Book>;

  abstract editBook$(book: Book): Observable<HttpResponse<any>>;
}
