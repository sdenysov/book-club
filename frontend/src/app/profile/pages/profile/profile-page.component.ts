import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {IUser} from '@@share/models/user.model';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  templateUrl: 'profile-page.component.html',
  styleUrls: ['profile-page.component.scss']
})
export class ProfilePageComponent {

  user$: Observable<IUser> = this.authReduxFacade.loggedInUser$;

  constructor(private authReduxFacade: AuthReduxFacade) {}
}
