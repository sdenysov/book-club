import {INavigationState} from '@@app/navigation/models/navigation.model';
import {INavbar} from '@@navigation/models/navbar.model';
import {Page} from '@@navigation/models/page';
import {NavigationSelectors} from '@@navigation/store/navigation.selectors';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NavigationReduxFacade {

  navbar$: Observable<INavbar> = this.store.pipe(select(NavigationSelectors.selectNavbar));
  currentPage$: Observable<Page> = this.store.pipe(select(NavigationSelectors.selectCurrentPage));

  constructor(private store: Store<INavigationState>) {}
}
