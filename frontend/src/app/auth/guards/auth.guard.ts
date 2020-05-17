import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {combineLatest} from 'rxjs';
import {first} from 'rxjs/operators';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {CoreReduxFacade} from '@@core/store/core-redux-facade';
import {AuthService} from '@@auth/services/auth.service';
import {NavigationService} from '@@router/services/navigation.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private authReduxFacade: AuthReduxFacade,
              private navigationReduxFacade: NavigationReduxFacade,
              private coreReduxFacade: CoreReduxFacade,
              private authService: AuthService,
              private navigationService: NavigationService) {
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
          this.navigationService.goToLoginPage();
        }
        resolve(pageAvailable);
      });
    });
  }
}
