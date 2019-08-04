import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserBooksReduxService} from '@@app/profile/services/user-books-redux.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {first} from 'rxjs/internal/operators';
import {UserBooksService} from '@@app/profile/services/user-books.servcie';
import {BookModel} from '@@share/models/book.model';
import {RouterReduxService} from '@@router/services/router-redux.service';

@Component({
  selector: 'app-edit-book-component',
  templateUrl: './edit-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppEditBookComponent implements OnInit {

  editBookForm: FormGroup;

  constructor(private userBooksService: UserBooksService,
              private userBooksReduxService: UserBooksReduxService,
              private routerReduxService: RouterReduxService,
              private builder: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.userBooksService.fetchEditingBook();
    this.userBooksReduxService.editingBook$
      .pipe(first(Boolean))
      .subscribe(book => {
        this.editBookForm = this.builder.group(book);
        this.cdr.detectChanges();
      });
  }

  save() {
    const book: BookModel = this.editBookForm.value;
    book.id = this.routerReduxService.getBookId();
    this.userBooksService.editBook(book);
  }
}
