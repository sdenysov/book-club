import {EditProfilePageComponent} from '@@app/profile/pages/edit/edit-profile-page.component';
import {ProfilePageComponent} from '@@app/profile/pages/profile/profile-page.component';
import {ProfileSettingsPageComponent} from '@@app/profile/pages/settings/profile-settings-page.component';
import {ProfileBooksEffects} from '@@app/profile/store/profile-books.effects';
import {profileBooksReducer} from '@@app/profile/store/profile-books.reducer';
import {AppShareModule} from '@@share/app-share.module';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

const SHARED_DECLARATIONS = [
  ProfilePageComponent,
  EditProfilePageComponent,
  ProfileSettingsPageComponent
];

@NgModule({
  imports: [
    AppShareModule,
    StoreModule.forFeature('profile', profileBooksReducer),
    EffectsModule.forFeature([ProfileBooksEffects]),
  ],
  declarations: SHARED_DECLARATIONS,
  exports: SHARED_DECLARATIONS
})
export class AppProfileModule {}
