import {INavbar} from '@@navigation/models/navbar.model';
import {NavigationReduxFacade} from '@@navigation/store/navigation-redux.facade';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavBarComponent {

  navbar$: Observable<INavbar> = this.navigationReduxFacade.navbar$;

  constructor(private navigationReduxFacade: NavigationReduxFacade) {}
}
