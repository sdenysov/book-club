import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  routingInProgress$: Observable<boolean> = this.routerReduxFacade.routingInProgress$;

  constructor(private routerReduxFacade: RouterReduxFacade) {}
}
