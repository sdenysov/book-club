import {Credentials} from '@@auth/models/credentials';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {IUser} from '@@share/models/user';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ISessionData} from '@@auth/models/session-data';

@Injectable({providedIn: 'root'})
export class AuthRestServiceMock implements AuthRestService {

  me(): Observable<IUser> {
    return of({id: 'd7acedf2ed2d4bdb', username: 'john'});
  }

  login$(credentials: Credentials): Observable<ISessionData> {
    return of({id: 'd7acedf2ed2d4bdb', path: '/userjohn', uid: 'd7acedf2ed2d4bdb'});
  }

  logout$(): Observable<HttpResponse<any>> {
    return of(new HttpResponse({
      body: {id: 'd7acedf2ed2d4bdb', username: 'john'}
    }));
  }
}
