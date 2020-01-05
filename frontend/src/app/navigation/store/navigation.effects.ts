import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {ROUTER_NAVIGATED, RouterNavigatedAction} from '@ngrx/router-store';
import {map} from 'rxjs/operators';
import {PageService} from '../services/page.service';
import {NavigationActions} from '@@navigation/store/navigation.actions';

@Injectable()
export class NavigationEffects {

  constructor(private actions$: Actions,
              private pageService: PageService) {
  }

  updateCurrentPage$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map((action: RouterNavigatedAction) => action.payload.routerState.url),
    map(currentUrl => this.pageService.getPageByUrl(currentUrl)),
    map(currentPage => NavigationActions.currentPageChanged({currentPage}))
  ));
}
