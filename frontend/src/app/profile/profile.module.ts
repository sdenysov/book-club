import {NgModule} from '@angular/core';
import {AppMyBooksComponent} from '@@app/profile/components/my-books/my-books.component';
import {AppNewBookComponent} from '@@app/profile/components/new-book/new-book.component';
import {AppMyBookComponent} from '@@app/profile/components/my-book/my-book.component';
import {ShareModule} from '@@share/share.module';
import {AppUserRoutingModule} from '@@app/profile/profile-routing.module';
import {AppProfileComponent} from '@@app/profile/components/profile/profile.component';
import {StoreModule} from '@ngrx/store';
import {ProfileBooksReducer} from '@@app/profile/store/profile-books.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ProfileBooksEffects} from '@@app/profile/store/profile-books.effects';
import {AppEditBookComponent} from '@@app/profile/components/edit-book/edit-book.component';

@NgModule({
  imports: [
    ShareModule,
    StoreModule.forFeature('profile', ProfileBooksReducer),
    EffectsModule.forFeature([ProfileBooksEffects]),
    AppUserRoutingModule
  ],
  declarations: [
    AppMyBooksComponent,
    AppNewBookComponent,
    AppMyBookComponent,
    AppProfileComponent,
    AppEditBookComponent
  ]
})
export class AppProfileModule {}
