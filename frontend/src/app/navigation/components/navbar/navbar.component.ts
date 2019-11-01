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
  navbar$ = this.navigationReduxFacade.navbar$;
  user$ = this.authReduxFacade.loggedInUser$;

  constructor(private navigationReduxFacade: NavigationReduxFacade,
              private authReduxFacade: AuthReduxFacade) {
    this.initViewModel();
  }

  private initViewModel() {
    this.vm$ = combineLatest([
      this.navigationReduxFacade.navbar$,
      this.authReduxFacade.loggedInUser$
    ]).pipe(
      map(([navbar, user]) => ({navbar, user}))
    );
  }
}
