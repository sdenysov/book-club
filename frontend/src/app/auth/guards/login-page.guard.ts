import {AuthService} from '@@auth/services/auth.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoginPageGuard implements CanLoad {
  constructor(private routerService: RouterService,
              private authService: AuthService,
              private authReduxFacade: AuthReduxFacade) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authReduxFacade.authState$.pipe(
      filter(authState => !authState.pending),
      map(authState => {
        if (!authState.isLoggedIn) {
          this.authService.redirectUrl = `/${route.path}`;
          this.routerService.goToLoginPage();
        }
        return authState.isLoggedIn;
      })
    );
  }
}
