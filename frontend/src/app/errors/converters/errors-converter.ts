import {HttpErrorResponse, HttpRequest} from '@angular/common/http';
import {v4 as uuid} from 'uuid';
import {ExceptionData} from '../models/exception-data.model';
import {HttpErrorData} from '../models/http-error-data.model';

export class ErrorsConverter {

  static toExceptionData(error: Error): ExceptionData {
    return new ExceptionData({
      uuid: ErrorsConverter.generateErrorId(),
      message: error.message,
      stack: error.stack
    });
  }

  static toHttpErrorData(request: HttpRequest<any>, errorResponse: HttpErrorResponse): HttpErrorData {
    return new HttpErrorData({
      uuid: ErrorsConverter.getErrorId(errorResponse),
      request: request,
      response: errorResponse
    });
  }

  private static generateErrorId(): string {
    return uuid().slice(5, 18);
  }

  private static getErrorId(errorResponse: HttpErrorResponse) {
    // TODO get errorId generated on server
    return ErrorsConverter.generateErrorId();
  }
}
