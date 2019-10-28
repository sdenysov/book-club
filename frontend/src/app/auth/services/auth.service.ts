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

  loginSuccessRedirectUrl: string;

  isLoggedIn$: Observable<boolean> = this.authReduxFacade.authState$.pipe(
    filter(authState => !authState.pending),
    map(authState => Boolean(authState.loggedInUser))
  );

  constructor(private routerService: RouterService,
              private authReduxFacade: AuthReduxFacade,
              private authRestService: AuthRestService) {
  }

  getLoggedInUser$(): Observable<User> {
    return this.authReduxFacade.authState$.pipe(
      filter(userData => userData.pending),
      map(userData => userData.loggedInUser)
    );
  }

  login$(credentials: Credentials): Observable<User> {
    return this.authRestService.login$(credentials);
  }

  logout(): Observable<HttpResponse<any>> {
    // TODO
    return of(null);
  }

  redirectOnSuccessLogin() {
    if (this.loginSuccessRedirectUrl) {
      this.routerService.goTo(this.loginSuccessRedirectUrl);
    } else {
      this.routerService.goToMainPage();
    }
  }
}

