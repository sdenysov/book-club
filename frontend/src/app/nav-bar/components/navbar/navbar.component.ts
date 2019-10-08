import {AuthService} from '@@auth/services/auth.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  loggedIn$: Observable<boolean> = this.authService.isLoggedIn$();

  constructor(private booksRestService: BooksRestService,
              private authReduxFacade: AuthReduxFacade,
              private authService: AuthService) {
  }

  inputChange$: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.inputChange$.pipe(
      filter(query => query.length > 2),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(query => {
      this.booksRestService.suggest$(query);
    });
  }
}
