import {Injectable} from '@angular/core';
import {Page} from '@@navigation/models/page';
import {Observable} from 'rxjs';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PageService {

  readonly pageToUrlPattern: Map<Page, RegExp> = new Map([
    [Page.MAIN, /^\/$/],
    [Page.SEARCH_BOOK, /^\/search-book/],
    [Page.LOGIN, /^\/login/],
    [Page.REGISTER, /^\/register/],
    [Page.SETTING, /^\/setting/],
    [Page.EDIT, /^\/edit/],
    [Page.BOOKS, /^\/books/],
  ]);

  currentPage$: Observable<Page> = this.routerReduxFacade.currentUrl$.pipe(
    tap((currentUrl) => console.log('currentUrl:', currentUrl)),
    map((currentUrl: string) => this.findPage(currentUrl))
  );

  constructor(private routerReduxFacade: RouterReduxFacade) { }

  private findPage(url: string): Page {
    const pages = Array.from(this.pageToUrlPattern.keys());
    return pages.find(page => this.pageToUrlPattern.get(page).test(url));
  }
}
