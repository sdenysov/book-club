import {UserBooksReduxFacade} from '@@app/user-books/store/user-books-redux.facade';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {BookModel} from '@@share/models/book.model';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  templateUrl: 'book-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsPageComponent implements OnInit {

  book$: Observable<BookModel> = this.userBooksReduxFacade.bookDetail$;

  constructor(private userBooksReduxFacade: UserBooksReduxFacade,
              private routerReduxFacade: RouterReduxFacade) {
  }

  ngOnInit() {
    const id: string = this.routerReduxFacade.getBookId();
    this.userBooksReduxFacade.fetchBookById(id);
  }
}
