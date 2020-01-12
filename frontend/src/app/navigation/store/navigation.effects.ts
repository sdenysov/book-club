import {PageService} from '@@navigation/services/page.service';
import {NavigationActions} from '@@navigation/store/navigation.actions';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ROUTER_REQUEST, RouterNavigatedAction} from '@ngrx/router-store';
import {map} from 'rxjs/operators';

@Injectable()
export class NavigationEffects {

  constructor(private actions$: Actions,
              private pageService: PageService) {
  }

  updateCurrentPage$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_REQUEST),
    map((action: RouterNavigatedAction) => action.payload.event.url),
    map(currentUrl => this.pageService.getPageByUrl(currentUrl)),
    map(currentPage => NavigationActions.currentPageChanged({currentPage}))
  ));
}
