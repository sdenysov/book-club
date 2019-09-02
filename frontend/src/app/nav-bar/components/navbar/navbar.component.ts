import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs/index';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/internal/operators';
import {BooksRestService} from '@@core/services/books/books-rest.service';
import {UserReduxService} from '@@user/services/user-redux.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class AppNavbarComponent implements OnInit {

  currentUserExists$: Observable<boolean> = this.userReduxService.currentUserExists$;

  constructor(private booksRestService: BooksRestService,
              private userReduxService: UserReduxService,
              private router: Router) {
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
