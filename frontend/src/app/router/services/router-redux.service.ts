import {RouterStateModel} from '@@router/models/router-state.model';
import {Injectable} from '@angular/core';
import {RouterReducerState} from '@ngrx/router-store';
import {select, Store} from '@ngrx/store';
import {RouterStateSelectors} from '@@router/store/router-state.selectors';
import {first} from 'rxjs/internal/operators';

@Injectable({providedIn: 'root'})
export class RouterReduxService {

  constructor(private store: Store<RouterReducerState<RouterStateModel>>) {}

  routerStateParams$ = this.store.pipe(select(RouterStateSelectors.getRouterStateParams));

  getBookId(): number {
    let bookId;
    this.routerStateParams$.pipe(first()).subscribe(stateParams => {
      bookId = stateParams.id;
    });
    return bookId ? +bookId : undefined;
  }
}
