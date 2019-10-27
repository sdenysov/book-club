import {IRouterState} from '@@router/models/router-state.model';
import {RouterSelectors} from '@@router/store/router-state.selectors';
import {StoreUtils} from '@@share/utils/store.utils';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RouterReduxFacade {

  pending$: Observable<boolean> = this.store.pipe(select(RouterSelectors.pending));

  constructor(private store: Store<IRouterState>) {}

  getBookId(): string {
    return StoreUtils.getSync(this.store, RouterSelectors.selectRouteParam('id'));
  }

  getUsername(): string {
    return StoreUtils.getSync(this.store, RouterSelectors.selectRouteParam('username'));
  }
}
