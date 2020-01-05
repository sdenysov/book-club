import {Route} from '@angular/router';

export class RoutingUtils {

  static addCanActivateGuardToTheFirstPosition(route: Route, guard: object): void {
    const canActivateGuards = route.canActivate || [];
    canActivateGuards.unshift(guard);
    route.canActivate = canActivateGuards;
  }
}
