import {Credentials} from '@@auth/models/credentials';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {User} from '@@share/models/user';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthRestServiceMock implements AuthRestService {

  me(): Observable<User> {
    return of({id: 'd7acedf2ed2d4bdb', username: 'john'});
  }

  login$(credentials: Credentials): Observable<User> {
    return of({id: 'd7acedf2ed2d4bdb', username: 'john'});
  }

  logout(): Observable<HttpResponse<any>> {
    return of(new HttpResponse({
      body: {id: 'd7acedf2ed2d4bdb', username: 'john'}
    }));
  }
}
