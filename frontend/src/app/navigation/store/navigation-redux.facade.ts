import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '@@navigation/models/page';
import {NavigationSelectors} from '@@navigation/store/navigation.selectors';
import {select, Store} from '@ngrx/store';
import {INavigationState} from '@@navigation/models/navigation-state.model';
import {INavbar} from '@@navigation/models/nav-bar.model';
import {StoreUtils} from '@@shared/utils/store.utils';

@Injectable({providedIn: 'root'})
export class NavigationReduxFacade {

  currentPage$: Observable<Page> = this.store.pipe(select(NavigationSelectors.selectCurrentPage));
  navbar$: Observable<INavbar> = this.store.pipe(select(NavigationSelectors.selectNavbar));

  constructor(private store: Store<INavigationState>) {}

  getCurrentPage(): Page {
    return StoreUtils.getSync(this.store, NavigationSelectors.selectCurrentPage);
  }
}
