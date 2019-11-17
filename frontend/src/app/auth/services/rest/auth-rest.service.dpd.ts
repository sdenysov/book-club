import {ICredentials} from '@@auth/models/credentials.model';
import {ISessionData} from '@@auth/models/session-data.model';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {IUser} from '@@share/models/user.model';
import {UrlProperties} from '@@share/properties/url.properties';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthRestServiceDpd implements AuthRestService {

  private readonly baseUrl = `${UrlProperties.api}/users`;

  constructor(private http: HttpClient) {}

  me$(): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/me`).pipe(map(user => {
      user.birthDate = user.birthDate.slice(0, 10);
      return user;
    }));
  }

  login$(credentials: ICredentials): Observable<ISessionData> {
    return this.http.post<ISessionData>(`${this.baseUrl}/login`, credentials);
  }

  logout$(): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${this.baseUrl}/logout`, null);
  }
}
