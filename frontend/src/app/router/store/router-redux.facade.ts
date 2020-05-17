import {RouterSelectors} from '@@router/store/router-state.selectors';
import {StoreUtils} from '@@shared/utils/store.utils';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IRouterStateUrl} from '@@router/models/router-state-url';
import {Data} from '@angular/router';

@Injectable({providedIn: 'root'})
export class RouterReduxFacade {

  routingInProgress$: Observable<boolean> = this.store.pipe(select(RouterSelectors.isRoutingInProgress));
  routerData$: Observable<Data> = this.store.pipe(select(RouterSelectors.getRouterStateData));
  currentUrl$: Observable<string> = this.store.pipe(select(RouterSelectors.getCurrentRoute));

  constructor(private store: Store<IRouterStateUrl>) {}

  getBookId(): string {
    return StoreUtils.getSync(this.store, RouterSelectors.getRouteParam('id'));
  }

  getUsername(): string {
    return StoreUtils.getSync(this.store, RouterSelectors.getRouteParam('username'));
  }

  getRouterData(): Data {
    return StoreUtils.getSync(this.store, RouterSelectors.getRouterStateData);
  }
}
