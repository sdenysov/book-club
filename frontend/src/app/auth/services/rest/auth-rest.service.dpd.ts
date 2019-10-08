import {Credentials} from '@@auth/models/credentials';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {User} from '@@share/models/user';
import {UrlProperties} from '@@share/properties/url.properties';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthRestServiceDpd implements AuthRestService {

  private readonly baseUrl = `${UrlProperties.api}/users`;

  constructor(private http: HttpClient) {}

  me(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`);
  }

  login$(credentials: Credentials): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, credentials);
  }

  logout(): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${this.baseUrl}/logout`, null);
  }
}
