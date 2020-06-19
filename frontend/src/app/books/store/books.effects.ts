import {HttpErrorHandlerService} from '@@errors/services/http-error-handler.service';
import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {map, mergeMap} from 'rxjs/operators';
import {BooksRestService} from '@@books/services/books-rest.service';
import {UserBooksActions} from '@@user/store/user-books.actions';
import {BooksActions} from '@@books/store/books.actions';
import {AbilityService} from '@@auth/services/ability.service';
import {IBook} from '@@books/models/book';

@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions,
              private abilityService: AbilityService,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private booksRestService: BooksRestService) {
  }

  fetchBook$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.fetchBook),
    mergeMap(({id}) => this.booksRestService.getBookById$(id)),
    map((book: IBook) => {
      this.abilityService.defineBookAbilities(book);
      return BooksActions.fetchBookSucceed({book});
    }),
    catchError(error => {
      this.httpErrorHandlerService.handleErrorResponse(error);
      return of(UserBooksActions.fetchBooksFailed(error));
    })
  ));
}
