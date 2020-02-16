import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EnvUtils} from '@@share/utils/env.utils';
import {IUserProfile} from '@@app/profile/models/user-profile';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('UserRestService')})
export abstract class UserRestService {

  abstract getUserProfile$(username: string): Observable<IUserProfile>;
}
