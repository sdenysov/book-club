import {Credentials} from '@@auth/models/credentials';
import {IUser} from '@@share/models/user';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ISessionData} from '@@auth/models/session-data';
import {EnvUtils} from '@@share/utils/env.utils';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('AuthRestService')})
export abstract class AuthRestService {

  abstract me$(): Observable<IUser>;

  abstract login$(credentials: Credentials): Observable<ISessionData>;

  abstract logout$(): Observable<HttpResponse<any>>;
}
