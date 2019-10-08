import {RouterStateModel} from '@@router/models/router-state.model';
import {RouterStateSelectors} from '@@router/store/router-state.selectors';
import {UrlProperties} from '@@share/properties/url.properties';
import {StoreUtils} from '@@share/utils/store.utils';
import {Injectable} from '@angular/core';
import {Params} from '@angular/router';
import {RouterReducerState} from '@ngrx/router-store';
import {Store} from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class RouterStateService {

  constructor(private store: Store<RouterReducerState<RouterStateModel>>) {}

  getUsername(): string {
    console.log('getUsername called');
    const urlParams: Params = StoreUtils.getSync(this.store, RouterStateSelectors.getRouterStateParams);
    return urlParams[UrlProperties.usernameParamKey];
  }
}
