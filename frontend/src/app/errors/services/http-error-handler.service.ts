import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as HttpStatus from 'http-status-codes';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpErrorData} from '../models/http-error-data.model';

@Injectable({providedIn: 'root'})
export class HttpErrorHandlerService {

  handleErrorResponse(httpErrorData: HttpErrorData) {
    const response: HttpErrorResponse = httpErrorData.response;
    const status = response.status;
    if (status) {
      switch (status) {
        case HttpStatus.UNAUTHORIZED: {
          console.log(HttpStatus.UNAUTHORIZED);
          break;
        }
        case HttpStatus.NOT_FOUND: {
          console.log(HttpStatus.NOT_FOUND);
          break;
        }
      }
    }
    // this.errorReduxService.addHttpError(httpErrorData);
  }

  catchAndHandleErrorResponse() {
    return (o: Observable<any>) => o.pipe(
      catchError((httpErrorData: HttpErrorData, caught$: Observable<any>) => {
        this.handleErrorResponse(httpErrorData);
        return caught$;
      }));
  }
}
