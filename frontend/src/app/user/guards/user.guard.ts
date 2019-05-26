import {CanLoad, Route, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {first} from 'rxjs/internal/operators';
import {UserReduxService} from '@@user/services/user-redux.service';

@Injectable({providedIn: 'root'})
export class UserGuard implements CanLoad {

  constructor(private userReduxService: UserReduxService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // TODO implement redirection to login or 404 page
    this.userReduxService.fetchCurrentUser();
    return this.userReduxService.currentUserExists$.pipe(first(Boolean));
  }
}
