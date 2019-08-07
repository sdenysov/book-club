import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProfileBooksReduxService} from '@@app/profile/services/profile-books-redux.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {first} from 'rxjs/internal/operators';
import {ProfileBooksService} from '@@app/profile/services/profile-books.service';
import {BookModel} from '@@share/models/book.model';
import {RouterReduxService} from '@@router/services/router-redux.service';

@Component({
  selector: 'app-edit-book-component',
  templateUrl: './edit-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppEditBookComponent implements OnInit {

  editBookForm: FormGroup;

  constructor(private profileBooksService: ProfileBooksService,
              private profileBooksReduxService: ProfileBooksReduxService,
              private routerReduxService: RouterReduxService,
              private builder: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.profileBooksService.fetchEditingBook();
    this.profileBooksReduxService.editingBook$
      .pipe(first(Boolean))
      .subscribe(book => {
        this.editBookForm = this.builder.group(book);
        this.cdr.detectChanges();
      });
  }

  save() {
    const book: BookModel = this.editBookForm.value;
    book.id = this.routerReduxService.getBookId();
    this.profileBooksService.editBook(book);
  }
}
