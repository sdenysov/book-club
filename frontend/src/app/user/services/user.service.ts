import {Injectable} from '@angular/core';
import {UserRestService} from '@@user/services/user-rest.service';
import {IUserProfile} from '@@app/profile/models/user-profile';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private userRestService: UserRestService) {}

  getUserProfile$(username: string): Observable<IUserProfile> {
    return this.userRestService.getUserProfile$(username);
  }
}
