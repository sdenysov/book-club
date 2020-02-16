import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IUserProfile} from '@@app/profile/models/user-profile';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProfileReduxFacade} from '@@app/profile/store/profile-redux.facade';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';

interface ViewModel {
  loaded: boolean;
  user: IUserProfile;
}

@Component({
  templateUrl: 'profile-page.component.html',
  styleUrls: ['profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit {

  public vm$: Observable<ViewModel>;

  constructor(private profileReduxFacade: ProfileReduxFacade,
              private routerReduxFacade: RouterReduxFacade) {
  }

  ngOnInit(): void {
    const urlUsername = this.routerReduxFacade.getUsername();
    this.profileReduxFacade.fetchUserProfile(urlUsername);
    this.vm$ = this.profileReduxFacade.userProfileState$.pipe(
      map(state => ({...state}))
    );
  }
}
