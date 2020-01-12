import {Route} from '@angular/router';

export class RoutingUtils {

  static addCanActivateGuardToTheFirstPosition(route: Route, guard: object): Route {
    const canActivateGuards = route.canActivate || [];
    canActivateGuards.unshift(guard);
    route.canActivate = canActivateGuards;
    return route;
  }
}
