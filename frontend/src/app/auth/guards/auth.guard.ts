import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {CoreReduxFacade} from '@@core/store/core-redux-facade';
import {AuthService} from '@@auth/services/auth.service';
import {RouterService} from '@@router/services/router.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade,
              private coreReduxFacade: CoreReduxFacade,
              private authService: AuthService,
              private routerService: RouterService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return combineLatest([
      this.authReduxFacade.authState$,
      this.navigationReduxFacade.currentPage$
    ]).pipe(
      filter(([authState, currentPage]) => !authState.pending && Boolean(currentPage)),
      map(([authState, currentPage]) => {
        this.coreReduxFacade.pageDataFetched();
        const pageAvailable = this.authService.isPageAvailableForCurrentLoggedInStatus(currentPage, authState.loggedIn);
        if (!pageAvailable) {
          console.log('route', route);
          this.authService.redirectUrl = `/${route.url}`;
          this.routerService.goToLoginPage();
        }
        console.log('pageAvailable', pageAvailable);
        return pageAvailable;
      })
    );
  }
}
