import {NgModule} from '@angular/core';
import {AppMyBooksComponent} from '@@app/profile/components/my-books/my-books.component';
import {AppNewBookComponent} from '@@app/profile/components/new-book/new-book.component';
import {AppMyBookComponent} from '@@app/profile/components/my-book/my-book.component';
import {ShareModule} from '@@share/share.module';
import {AppUserRoutingModule} from '@@app/profile/profile-routing.module';
import {AppProfileComponent} from '@@app/profile/components/profile/profile.component';
import {StoreModule} from '@ngrx/store';
import {userBooksReducer} from '@@app/profile/store/user-books.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserBooksEffects} from '@@app/profile/store/user-books.effects';
import {AppEditBookComponent} from '@@app/profile/components/edit-book/edit-book.component';

@NgModule({
  imports: [
    ShareModule,
    StoreModule.forFeature('profile', userBooksReducer),
    EffectsModule.forFeature([UserBooksEffects]),
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
