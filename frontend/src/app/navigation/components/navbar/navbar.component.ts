import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {INavbar} from '@@navigation/models/navbar.model';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {IUser} from '@@share/models/user.model';
import {Component} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface IViewModel {
  navbar: INavbar;
  user: IUser;
}

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavBarComponent {

  vm$: Observable<IViewModel>;

  constructor(private navigationReduxFacade: NavigationReduxFacade,
              private authReduxFacade: AuthReduxFacade) {
    this.vm$ = this.getViewModel();
  }

  logout() {
    this.authReduxFacade.logout();
  }

  private getViewModel(): Observable<IViewModel> {
    return combineLatest([
      this.navigationReduxFacade.navbar$,
      this.authReduxFacade.loggedInUser$
    ]).pipe(map(([navbar, user]) => ({navbar, user})));
  }
}
