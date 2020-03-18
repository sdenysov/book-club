import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {UserRestService} from '@@user/services/user-rest.service';
import {IUserProfile} from '@@app/profile/models/user-profile';
import {UrlProperties} from '@@shared/properties/url.properties';
import {HttpUtils} from '@@shared/utils/http.utils';
import {CollectionUtils} from '@@shared/utils/collection.utils';

@Injectable({providedIn: 'root'})
export class UserRestServiceDpd implements UserRestService {

  private readonly baseUrl = `${UrlProperties.api}/users`;

  constructor(private http: HttpClient) {}

  getUserProfile$(username: string): Observable<IUserProfile> {
    const params: HttpParams = HttpUtils.createQueryParams({username});
    return this.http.get<IUserProfile>(`${this.baseUrl}`, {params}).pipe(
      delay(1000),
      map(profiles => CollectionUtils.isEmpty(profiles) ? null : profiles[0])
    );
  }
}
