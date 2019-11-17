import {Page} from '@@navigation/models/page';
import {PageService} from '@@navigation/services/page.service';

interface IPageDefineTestCase {
  urls: string[];
  page: Page;
}

describe('PageServiceSpec', () => {

  const pageService: PageService = new PageService();
  const testCases: IPageDefineTestCase[] = [
    {page: Page.MAIN, urls: ['', '/']},
    {page: Page.SEARCH_BOOK, urls: ['/search-book', '/search-book/']},
    {page: Page.LOGIN, urls: ['/login', '/login']},
    {page: Page.REGISTER, urls: ['/register', '/register/']},
    {page: Page.BOOKS, urls: ['/anyusername/books', '/anyusername/books/']},
    {page: Page.EDIT_BOOK, urls: ['/anyusername/books/123/edit', '/anyusername/books/123/edit/']},
    {page: Page.NEW_BOOK, urls: ['/anyusername/books/new', '/anyusername/books/new/']},
    {page: Page.BOOK_DETAILS, urls: ['/anyusername/books/123', '/anyusername/books/123/']},
    {page: Page.PROFILE, urls: ['/anyusername', '/anyusername/']},
    {page: Page.EDIT_PROFILE, urls: ['/anyusername/edit', '/anyusername/edit/']},
    {page: Page.PROFILE_SETTINGS, urls: ['/anyusername/settings', '/anyusername/settings/']},
    {page: Page.NOT_FOUND, urls: ['/404', '/404/']}
  ];

  it('should recognize current page by url', () => {
    testCases.forEach(testCase => {
      testCase.urls.forEach(url => {
        const page = pageService.getPageByUrl(url);
        expect(page).toBe(testCase.page);
      });
    });
  });
});
