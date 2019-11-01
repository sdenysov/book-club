import {Injectable} from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faIdCard, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Injectable({providedIn: 'root'})
export class AppInitService {

  constructor(private faIconLibrary: FaIconLibrary) {}

  init(): Promise<void> {
    return new Promise<void>((resolve) => {
      AppInitService.configIcons(this.faIconLibrary);
      resolve();
    });
  }

  private static configIcons(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faIdCard);
    faIconLibrary.addIcons(faUserCircle);
    faIconLibrary.addIcons(faSearch);
  }
}
