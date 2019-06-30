import {HttpErrorResponse, HttpRequest} from '@angular/common/http';

export class HttpErrorData {
  uuid: string;
  request: HttpRequest<any>;
  response: HttpErrorResponse;

  constructor({uuid, request, response}) {
    this.uuid = uuid;
    this.request = request;
    this.response = response;
  }
}
