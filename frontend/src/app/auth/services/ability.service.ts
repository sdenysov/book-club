import {Injectable} from '@angular/core';
import {Ability, AbilityBuilder} from '@casl/ability';
import {IUser} from '@@shared/models/user';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {NavigationService} from '@@navigation/services/navigation.service';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';

@Injectable({providedIn: 'root'})
export class AbilityService {

  static guestAbilities: Ability = AbilityBuilder.define(can => {
    can('read', 'all');
  });

  constructor(private ability: Ability,
              private authReduxFacade: AuthReduxFacade,
              private navigationService: NavigationService,
              private routerReduxFacade: RouterReduxFacade) {
  }

  defineAbilities() {
    const user: IUser = this.authReduxFacade.getUser();
    const urlUsername = this.routerReduxFacade.getUsername();

    const {rules, can, cannot} = AbilityBuilder.extract();
    let resultRules;
    if (user && user.username === urlUsername) {
      can('manage', 'all');
      resultRules = rules;
    } else {
      resultRules = AbilityService.guestAbilities.rules;
    }
    this.ability.update(resultRules);
    return resultRules;
  }
}
