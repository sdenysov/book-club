import {Credentials} from '@@auth/models/credentials';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {IUser} from '@@share/models/user';
import {UrlProperties} from '@@share/properties/url.properties';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ISessionData} from '@@auth/models/session-data';

@Injectable({providedIn: 'root'})
export class AuthRestServiceDpd implements AuthRestService {

  private readonly baseUrl = `${UrlProperties.api}/users`;

  constructor(private http: HttpClient) {}

  me(): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/me`);
  }

  login$(credentials: Credentials): Observable<ISessionData> {
    return this.http.post<ISessionData>(`${this.baseUrl}/login`, credentials);
  }

  logout$(): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${this.baseUrl}/logout`, null);
  }
}
