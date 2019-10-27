import {ROUTER} from '@@router/store/router-store.properties';
import {routerInProgressReducer} from '@@router/store/router-in-progress.reducer';
import {TestBed} from '@angular/core/testing';
import {ROUTER_NAVIGATED, ROUTER_REQUEST} from '@ngrx/router-store';
import {select, Store, StoreModule} from '@ngrx/store';
import {cold} from 'jasmine-marbles';
import {RouterState} from '@@router/models/router-state.model';

describe('RoutingInProgressReducerSpec', function () {

  let store: Store<RouterState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({[ROUTER]: routerInProgressReducer})
      ]
    });
    store = TestBed.get(Store);
  });

  it('should change routingInProgress status when request/navigated action occurred', () => {
    cold('---a--b', {
      a: {type: ROUTER_REQUEST},
      b: {type: ROUTER_NAVIGATED}
    }).subscribe(action => store.dispatch(action));
    const stream$ = store.pipe(select(state => state.routerInProgress));
    const expected$ = cold('a--b--c', {a: false, b: true, c: false});
    expect(stream$).toBeObservable(expected$);
  });
});
