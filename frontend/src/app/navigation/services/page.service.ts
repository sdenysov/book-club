import {Page} from '@@app/navigation/models/page';
import {Injectable} from '@angular/core';

interface IPageUrlPattern {
  page: Page;
  regexp: RegExp;
}

@Injectable({providedIn: 'root'})
export class PageService {

  readonly pageUrlPatterns: IPageUrlPattern[] = [
    {page: Page.MAIN, regexp: /^\/?$/},
    {page: Page.SEARCH_BOOK, regexp: /^\/search-book\/?$/},
    {page: Page.REGISTER, regexp: /^\/register\/?$/},
    {page: Page.LOGIN, regexp: /^\/login\/?$/},
    {page: Page.BOOKS, regexp: /^\/[a-z]+\/books\/?$/},
    {page: Page.EDIT_BOOK, regexp: /^\/[a-z]+\/books\/[0-9]+\/edit\/?$/},
    {page: Page.NEW_BOOK, regexp: /^\/[a-z]+\/books\/new\/?$/},
    {page: Page.BOOK_DETAILS, regexp: /^\/[a-z]+\/books\/[0-9]+\/?$/},
    {page: Page.EDIT_PROFILE, regexp: /^\/[a-z]+\/edit\/?$/},
    {page: Page.PROFILE_SETTINGS, regexp: /^\/[a-z]+\/settings\/?$/},
    {page: Page.NOT_FOUND, regexp: /^\/404\/?$/},
    {page: Page.PROFILE, regexp: /^\/[a-z]+\/?$/}
  ];

  getPageByUrl(url: string): Page {
    const descriptor = this.pageUrlPatterns.find(item => item.regexp.test(url));
    return descriptor && descriptor.page;
  }
}
