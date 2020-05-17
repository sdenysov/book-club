import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IBook} from '@@books/models/book';
import {Observable} from 'rxjs';
import {BooksFinderReduxFacade} from '@@app/books-finder/store/books-finder-redux.facade';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';

@Component({
  templateUrl: 'find-books-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FindBooksPageComponent implements OnInit {

  @Input()
  public books$: Observable<IBook[]> = this.booksFinderReduxFacade.books$;

  constructor(private booksFinderReduxFacade: BooksFinderReduxFacade,
              private routerReduxFacade: RouterReduxFacade) {
  }

  ngOnInit() {
    const routerData = this.routerReduxFacade.getRouterData();
    if (!routerData || !routerData.searchNavigation) {
      this.booksFinderReduxFacade.fetchAllBooks();
    }
  }

  trackByBooks(index: number, book: IBook) {
    return book.id;
  }
}
