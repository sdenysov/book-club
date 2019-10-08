import {RouterStateModel} from '@@router/models/router-state.model';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateModel> {

  serialize(routerState: RouterStateSnapshot): RouterStateModel {
    console.log('serialize router called');
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    return {
      url: routerState.url,
      queryParams: routerState.root.queryParams,
      params: state.params,
      data: state.data
    };
  }
}
