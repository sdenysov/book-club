import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '@@navigation/models/page';
import {NavigationSelectors} from '@@navigation/store/navigation.selectors';
import {select, Store} from '@ngrx/store';
import {INavigationState} from '@@navigation/models/navigation-state.model';

@Injectable({providedIn: 'root'})
export class NavigationReduxFacade {

  currentPage$: Observable<Page> = this.store.pipe(select(NavigationSelectors.selectCurrentPage));

  constructor(private store: Store<INavigationState>) {}
}
