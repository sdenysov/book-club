import {EnvUtils} from '@@core/utils/env.utils';
import {Credentials} from '@@auth/models/credentials';
import {User} from '@@share/models/user';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('AuthRestService')})
export abstract class AuthRestService {

  abstract me(): Observable<User>;

  abstract login$(credentials: Credentials): Observable<User>;

  abstract logout(): Observable<HttpResponse<any>>;
}
