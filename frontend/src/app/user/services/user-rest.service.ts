import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IUserProfile} from '@@app/profile/models/user-profile';
import {IUser} from '@@shared/models/user';
import {UserRestServiceDpd} from '@@user/services/user-rest.service.dpd';

@Injectable({providedIn: 'root', useExisting: UserRestServiceDpd})
export abstract class UserRestService {

  abstract getUserProfile$(username: string): Observable<IUserProfile>;

  abstract getUserByUserName$(username: string): Observable<IUser>;
}
