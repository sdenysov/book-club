import {EnvUtils} from '@@core/utils/env.utils';
import {ICredentials} from '@@auth/models/credentials.model';
import {IUser} from '@@share/models/user.model';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('AuthRestService')})
export abstract class AuthRestService {

  abstract me(): Observable<IUser>;

  abstract login$(credentials: ICredentials): Observable<IUser>;

  abstract logout(): Observable<HttpResponse<any>>;
}
