import {Injectable} from '@angular/core';
import {PageService} from '@@navigation/services/page.service';
import {AuthService} from '@@auth/services/auth.service';
import {combineLatest} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NavigationReduxFacade {

  constructor(private pageService: PageService,
              private authService: AuthService) {}

  pageAndLoggedIn$ = combineLatest([
    this.pageService.currentPage$,
    this.authService.isLoggedIn$
  ]);
}
