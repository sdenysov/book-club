import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {BookModel} from '@@share/models/book.model';
import {EnvUtils} from '@@core/utils/env.utils';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('BooksRestService')})
export abstract class BooksRestService {

  abstract get$(): Observable<BookModel[]>;

  abstract suggest$(query: string): Observable<any>;

  abstract addBook$(book: BookModel): Observable<HttpResponse<any>>;

  abstract getByUserId$(userId: string): Observable<BookModel[]>;

  abstract getBookById$(bookId: string): Observable<BookModel>;

  abstract editBook$(book: BookModel): Observable<HttpResponse<any>>;
}
