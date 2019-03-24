import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/index';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/internal/operators';
import {BooksDataService} from '@@books-page/services/books-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class AppNavbarComponent implements OnInit {
  constructor(private booksDataService: BooksDataService) {}

  inputChange$: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.inputChange$.pipe(
      filter(query => query.length > 2),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(query => {
      this.booksDataService.suggest(query);
    });
  }
}
