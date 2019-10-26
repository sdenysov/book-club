import {ROUTER_NAVIGATED, ROUTER_REQUEST} from '@ngrx/router-store';
import {Action} from '@ngrx/store';

export function routingStateReducer(state = false, action: Action) {
  switch (action.type) {
    case ROUTER_REQUEST: {
      return true;
    }
    case ROUTER_NAVIGATED: {
      return false;
    }
  }
  return state;
}
