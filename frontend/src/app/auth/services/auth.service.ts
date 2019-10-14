import {Credentials} from '@@auth/models/credentials';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {User} from '@@share/models/user';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {

  redirectUrl: string;

  constructor(private routerService: RouterService,
              private authReduxFacade: AuthReduxFacade,
              private authRestService: AuthRestService) {
  }

  getLoggedInUser$(): Observable<User> {
    return this.authReduxFacade.authState$.pipe(
      filter(userData => userData.loggedInUserLoaded),
      map(userData => userData.loggedInUser)
    );
  }

  isLoggedIn$(): Observable<boolean> {
    return this.authReduxFacade.authState$.pipe(
      filter(userData => userData.loggedInUserLoaded),
      map(userData => Boolean(userData.loggedInUser))
    );
  }

  login$(credentials: Credentials): Observable<User> {
    return this.authRestService.login$(credentials);
  }

  logout(): Observable<HttpResponse<any>> {
    return of(new HttpResponse({
      body: {id: 'd7acedf2ed2d4bdb', username: 'john'}
    }));
  }

  redirectOnSuccessLogin() {
    if (this.redirectUrl) {
      this.routerService.goTo(this.redirectUrl);
    } else {
      this.routerService.goToMainPage();
    }
  }
}

