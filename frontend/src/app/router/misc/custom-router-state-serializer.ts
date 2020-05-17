import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';
import {IRouterStateUrl} from '@@router/models/router-state-url';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomRouterStateSerializer implements RouterStateSerializer<IRouterStateUrl> {

  constructor(private router: Router) {}

  serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const extrasData = getCurrentNavigationExtrasData(this.router);
    return {
      url: routerState.url,
      queryParams: routerState.root.queryParams,
      params: state.params,
      data: {...state.data, ...extrasData}
    };
  }
}

function getCurrentNavigationExtrasData(router: Router) {
  const extras = router.getCurrentNavigation().extras;
  return extras && extras.state;
}
