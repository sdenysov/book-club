import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IBook} from '@@books/models/book';
import {UserBooksReduxFacade} from '@@user/store/user-books-redux.facade';

@Component({
  selector: 'app-book-page-detail',
  templateUrl: 'book-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsPageComponent implements OnInit {

  public book$: Observable<IBook> = this.userBooksReduxFacade.bookDetail$;

  constructor(private userBooksReduxFacade: UserBooksReduxFacade,
              private routerReduxFacade: RouterReduxFacade) {
  }

  ngOnInit() {
    const id: string = this.routerReduxFacade.getBookId();
    this.userBooksReduxFacade.fetchBookById(id);
  }
}
