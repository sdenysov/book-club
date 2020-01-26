import {Injectable} from '@angular/core';
import {Ability, AbilityBuilder} from '@casl/ability';

@Injectable({providedIn: 'root'})
export class AbilityService {

  static guestAbilities: Ability = AbilityBuilder.define(can => {
    can('read', 'all');
  });

  constructor(private ability: Ability) {}

  defineAbilities(user, page, urlUsername) {
    const { rules, can, cannot } = AbilityBuilder.extract();
    // TODO ...
    if (user) {
      can('manage', 'all');
      this.ability.update(rules);
    } else {
      this.ability.update(AbilityService.guestAbilities.rules);
    }
  }
}
