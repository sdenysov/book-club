import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {combineLatest, Observable, of} from 'rxjs';
import {filter, first, map, mapTo, tap, withLatestFrom} from 'rxjs/operators';
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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(resolve => {
      combineLatest([
        this.authReduxFacade.authState$.pipe(first(authState => !authState.pending)),
        this.navigationReduxFacade.currentPage$.pipe(first(currentPage => Boolean(currentPage)))
      ]).pipe(first()).subscribe(([authState, currentPage]) => {
        this.coreReduxFacade.pageDataFetched();
        const pageAvailable = this.authService.isPageAvailable(currentPage, authState.loggedIn);
        if (!pageAvailable) {
          this.authService.redirectUrl = `/${route.url}`;
          this.routerService.goToLoginPage();
        }
        resolve(pageAvailable);
      });
    });
  }
}
