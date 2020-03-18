import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IUserProfile} from '@@app/profile/models/user-profile';
import {EnvUtils} from '@@shared/utils/env.utils';

@Injectable({providedIn: 'root', useExisting: EnvUtils.getImpl('UserRestService')})
export abstract class UserRestService {

  abstract getUserProfile$(username: string): Observable<IUserProfile>;
}
