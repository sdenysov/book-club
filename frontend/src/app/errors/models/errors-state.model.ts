import {ExceptionData} from './exception-data.model';
import {HttpErrorData} from './http-error-data.model';

export interface IErrorsState {
  globalErrorCode: string | null;
  errorRequestUrl: string | null;
  exceptions: ExceptionData[];
  httpErrors: HttpErrorData[];
}
