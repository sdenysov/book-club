import {AuthService} from '@@auth/services/auth.service';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  routingInProgress$: Observable<boolean> = this.routerReduxFacade.routingInProgress$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(private routerReduxFacade: RouterReduxFacade,
              private authService: AuthService) {
  }
}
