import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  routingInProgress$: Observable<boolean> = this.routerReduxFacade.routingInProgress$;
  isLoggedIn$: Observable<boolean> = this.authReduxFacade.isLoggedIn$;

  constructor(private routerReduxFacade: RouterReduxFacade,
              private authReduxFacade: AuthReduxFacade) {
  }
}
