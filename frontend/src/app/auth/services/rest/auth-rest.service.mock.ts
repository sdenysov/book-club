import {ICredentials} from '@@auth/models/credentials.model';
import {ISessionDataModel} from '@@auth/models/session-data.model';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {IUser} from '@@share/models/user.model';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthRestServiceMock implements AuthRestService {

  me$(): Observable<IUser> {
    return of({id: 'd7acedf2ed2d4bdb', username: 'john'});
  }

  login$(credentials: ICredentials): Observable<ISessionDataModel> {
    return of({id: 'ecabz52264dc74j4', path: '/users', uid: '0ad9460afb318b96'});
  }

  logout$(): Observable<HttpResponse<any>> {
    return of(new HttpResponse({
      body: {id: 'd7acedf2ed2d4bdb', username: 'john'}
    }));
  }
}
