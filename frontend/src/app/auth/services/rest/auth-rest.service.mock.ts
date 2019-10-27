import {ICredentials} from '@@auth/models/credentials.model';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {IUser} from '@@share/models/user.model';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthRestServiceMock implements AuthRestService {

  me(): Observable<IUser> {
    return of({id: 'd7acedf2ed2d4bdb', username: 'john'});
  }

  login$(credentials: ICredentials): Observable<IUser> {
    return of({id: 'd7acedf2ed2d4bdb', username: 'john'});
  }

  logout(): Observable<HttpResponse<any>> {
    return of(new HttpResponse({
      body: {id: 'd7acedf2ed2d4bdb', username: 'john'}
    }));
  }
}
