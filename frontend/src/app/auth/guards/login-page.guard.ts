import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {RouterService} from '@@router/services/router.service';
import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoginPageGuard implements CanLoad {

  constructor(private userReduxFacade: AuthReduxFacade,
              private routerService: RouterService,
              private authReduxFacade: AuthReduxFacade) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authReduxFacade.isLoggedIn$.pipe(
      tap(loggedIn => {
        if (loggedIn) {
          this.routerService.goToMainPage();
        }
      }),
      map(loggedIn => !loggedIn)
    );
  }
}
