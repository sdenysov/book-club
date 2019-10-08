import {RouterStoreKey} from '@@router/store';
import {ROUTING_IN_PROGRESS} from '@@router/store/router-store.properties';
import {routingInProgressReducer} from '@@router/store/routing-in-progress.reducer';
import {TestBed} from '@angular/core/testing';
import {ROUTER_NAVIGATED, ROUTER_REQUEST} from '@ngrx/router-store';
import {select, Store, StoreModule} from '@ngrx/store';
import {cold} from 'jasmine-marbles';

describe('RoutingInProgressReducerSpec', function () {

  let store: Store<{ [ROUTING_IN_PROGRESS]: boolean }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({[RouterStoreKey.ROUTING_IN_PROGRESS]: routingInProgressReducer})
      ]
    });
    store = TestBed.get(Store);
  });

  it('should change routingInProgress status when request/navigated action occurred', () => {
    cold('---a--b', {
      a: {type: ROUTER_REQUEST},
      b: {type: ROUTER_NAVIGATED}
    }).subscribe(action => store.dispatch(action));
    const stream$ = store.pipe(select(state => state.routingInProgress));
    const expected$ = cold('a--b--c', {a: false, b: true, c: false});
    expect(stream$).toBeObservable(expected$);
  });
});
