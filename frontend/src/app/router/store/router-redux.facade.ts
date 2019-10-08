import {RouterStateModel} from '@@router/models/router-state.model';
import {RouterSelectors} from '@@router/store/router-state.selectors';
import {StoreUtils} from '@@share/utils/store.utils';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RouterReduxFacade {

  routingInProgress$: Observable<boolean> = this.store.pipe(select(RouterSelectors.isRoutingInProgress));

  constructor(private store: Store<RouterStateModel>) {}

  getBookId(): string {
    return StoreUtils.getSync(this.store, RouterSelectors.selectRouteParam('id'));
  }

  getUsername(): string {
    console.log('getUsername called');
    return StoreUtils.getSync(this.store, RouterSelectors.selectRouteParam('username'));
  }
}
