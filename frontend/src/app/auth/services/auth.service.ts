import {ICredentials} from '@@auth/models/ICredentials';
import {AuthRestService} from '@@auth/services/rest/auth-rest.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {IUser} from '@@share/models/IUser';
import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {

  redirectUrl: string;
  loggedInUser$: Observable<IUser>;
  isLoggedIn$: Observable<boolean>;

  constructor(private routerService: RouterService,
              private authReduxFacade: AuthReduxFacade,
              private authRestService: AuthRestService) {
    this.loggedInUser$ = authReduxFacade.authState$.pipe(
      filter(userData => userData.loggedInUserLoaded),
      map(userData => userData.loggedInUser)
    );
    this.isLoggedIn$ = this.loggedInUser$.pipe(
      map(loggedInUser => Boolean(loggedInUser))
    );
  }

  login$(credentials: ICredentials): Observable<IUser> {
    return this.authRestService.login$(credentials);
  }

  logout(): Observable<HttpResponse<any>> {
    // TODO handle logout event
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

