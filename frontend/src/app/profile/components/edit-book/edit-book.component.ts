import {Component, OnInit} from '@angular/core';
import {RouterReduxService} from '@@router/services/router-redux.service';
import {UserBooksReduxService} from '@@app/profile/services/user-books-redux.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookModel} from '@@share/models/book.model';
import {first} from 'rxjs/internal/operators';

@Component({
  selector: 'app-edit-book-component',
  templateUrl: './edit-book.component.html',
})
export class AppEditBookComponent implements OnInit {

  book: BookModel;
  editBookForm: FormGroup;

  constructor(private userBooksReduxService: UserBooksReduxService,
              private routerReduxService: RouterReduxService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    const id = this.routerReduxService.getBookId();
    this.userBooksReduxService.getUserBookById$(id).pipe(first()).subscribe(userBook => this.book = userBook);
    this.editBookForm = this.builder.group(this.book);
  }
}
