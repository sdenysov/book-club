import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';

@Component({
  templateUrl: 'profile-page.component.html',
  styleUrls: ['profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit {

  // TODO ...
  public loaded: true;
  public user: true;

  constructor(private routerReduxFacade: RouterReduxFacade) {}

  ngOnInit(): void {
    const urlUsername = this.routerReduxFacade.getUsername();

  }
}
