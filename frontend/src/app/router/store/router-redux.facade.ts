import {RouterStateModel} from '@@router/models/router-state.model';
import {RouterStateSelectors} from '@@router/store/router-state.selectors';
import {StoreUtils} from '@@share/utils/store.utils';
import {Injectable} from '@angular/core';
import {Params} from '@angular/router';
import {RouterReducerState} from '@ngrx/router-store';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RouterReduxFacade {

  routerStateParams$: Observable<Params> = this.store.pipe(select(RouterStateSelectors.getRouterStateParams));
  routingInProgress$: Observable<boolean> = this.store.pipe(select(RouterStateSelectors.isRoutingInProgress));

  constructor(private store: Store<RouterReducerState<RouterStateModel>>) {}

  getBookId(): string {
    const stateParams = StoreUtils.getSync(this.store, RouterStateSelectors.getRouterStateParams);
    return stateParams.id;
  }
}
