import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {INavbar} from '@@navigation/models/navbar.model';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {IUser} from '@@share/models/user.model';
import {Component, OnInit} from '@angular/core';
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
export class NavBarComponent implements OnInit {

  vm$: Observable<IViewModel>;

  constructor(private navigationReduxFacade: NavigationReduxFacade,
              private authReduxFacade: AuthReduxFacade) {
  }

  ngOnInit() {
    this.vm$ = combineLatest([
      this.navigationReduxFacade.navbar$,
      this.authReduxFacade.loggedInUser$
    ]).pipe(map(([navbar, loggedInUser]) => {
      return {navbar: navbar, user: loggedInUser};
    }));
  }

  logout() {
    this.authReduxFacade.logout();
  }
}
