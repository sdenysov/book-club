import {ICredentials} from '@@auth/models/credentials.model';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {IUser} from '@@share/models/user.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthRestServiceImpl implements AuthRestService {

  private readonly baseUrl = 'users';

  constructor(private http: HttpClient) {}

  me(): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/me`);
  }

  login$(credentials: ICredentials): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/login`, credentials);
  }

  logout(): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${this.baseUrl}/logout`, null);
  }
}
