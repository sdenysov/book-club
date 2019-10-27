import {StoreTestUtils} from '@@core/tests/utils/store-test.utils';
import {IRouterState} from '@@router/models/IRouterState';
import {routingStateReducer} from '@@router/store/routing-state.reducer';
import {TestBed} from '@angular/core/testing';
import {ROUTER_NAVIGATED, ROUTER_REQUEST, routerReducer} from '@ngrx/router-store';
import {ActionReducerMap, select, Store, StoreModule} from '@ngrx/store';
import {cold} from 'jasmine-marbles';

describe('RoutingInProgressReducerSpec', function () {

  const reducers: ActionReducerMap<IRouterState> = {
    state: routerReducer,
    pending: routingStateReducer
  };
  let store: Store<IRouterState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, StoreTestUtils.DEFAULT_ROOT_STORE_CONFIG)
      ]
    });
    store = TestBed.get(Store);
  });

  it('should change routingInProgress status when request/navigated action occurred', () => {
    cold('---a--b', {
      a: {type: ROUTER_REQUEST},
      b: {type: ROUTER_NAVIGATED}
    }).subscribe(action => store.dispatch(action));
    const stream$ = store.pipe(select(state => state.pending));
    const expected$ = cold('a--b--c', {a: false, b: true, c: false});
    expect(stream$).toBeObservable(expected$);
  });
});
