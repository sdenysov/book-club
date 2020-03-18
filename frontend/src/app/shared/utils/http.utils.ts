import {HttpParams} from '@angular/common/http';

export class HttpUtils {

  static createQueryParams(queryParams: { [key: string]: any }): HttpParams {
    let httpParams = new HttpParams();
    Object.entries(queryParams)
      .filter(([key, value]) => value !== null && value !== undefined)
      .forEach(([key, value]) => httpParams = HttpUtils.buildParam(httpParams, key, value));
    return httpParams;
  }

  private static buildParam(httpParams, key: string, value: any) {
    if (Array.isArray(value)) {
      value.forEach(param => {
        httpParams = httpParams.append(key, param.toString());
      });
    } else {
      httpParams = httpParams.append(key, value.toString());
    }
    return httpParams;
  }
}
