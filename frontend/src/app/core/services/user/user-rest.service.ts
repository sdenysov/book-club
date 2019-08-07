import {Observable} from 'rxjs/index';
import {UserModel} from '@@user/models/user.model';
import {Injectable} from '@angular/core';
import {UserRestServicesMock} from '@@user/services/user-rest.services.mock';

@Injectable({providedIn: 'root', useExisting: UserRestServicesMock})
export abstract class UserRestService {

  abstract getCurrentUser$(): Observable<UserModel>;
}
