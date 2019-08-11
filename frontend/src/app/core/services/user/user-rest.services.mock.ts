import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {UserRestService} from '@@core/services/user/user-rest.service';
import {UserModel} from '@@share/models/user.model';

@Injectable({providedIn: 'root'})
export class UserRestServicesMock implements UserRestService {

  constructor(@Inject('api') private api: string) {}

  getCurrentUser$(): Observable<UserModel> {
    return of({
      id: 'd7acedf2ed2d4bdb',
      username: 'vasya',
      password: 'angular'
    });
  }
}
