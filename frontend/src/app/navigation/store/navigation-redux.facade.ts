import {NavigationState} from '@@app/navigation/models/navigation.model';
import {Navbar} from '@@navigation/models/navbar.model';
import {Page} from '@@navigation/models/page';
import {NavigationSelectors} from '@@navigation/store/navigation.selectors';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NavigationReduxFacade {

  navbar$: Observable<Navbar> = this.store.pipe(select(NavigationSelectors.selectNavbar));
  currentPage$: Observable<Page> = this.store.pipe(select(NavigationSelectors.selectCurrentPage));

  constructor(private store: Store<NavigationState>) {}
}
