import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {UserRestServicesMock} from '@@core/services/user/user-rest.services.mock';
import {UserModel} from '@@share/models/user.model';

@Injectable({providedIn: 'root', useExisting: UserRestServicesMock})
export abstract class UserRestService {

  abstract getCurrentUser$(): Observable<UserModel>;
}
