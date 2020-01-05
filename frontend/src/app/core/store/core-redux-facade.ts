import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {CoreActions} from '@@core/store/core.actions';

@Injectable({providedIn: 'root'})
export class CoreReduxFacade {

  constructor(private store: Store<any>) {}

  pageDataFetched() {
    this.store.dispatch(CoreActions.pageDataFetched());
  }
}

