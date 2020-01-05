import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {filter, map, mapTo, tap, withLatestFrom} from 'rxjs/operators';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {CoreReduxFacade} from '@@core/store/core-redux-facade';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade,
              private coreReduxFacade: CoreReduxFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return combineLatest([
      this.authReduxFacade.isLoggedIn$,
      this.navigationReduxFacade.currentPage$
    ]).pipe(
      filter(([isLoggedIn, currentPage]) => isLoggedIn && Boolean(currentPage)),
      tap(() => this.coreReduxFacade.pageDataFetched()),
      mapTo(true)
    );
  }
}
