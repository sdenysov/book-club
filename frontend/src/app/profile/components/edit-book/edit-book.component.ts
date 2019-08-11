import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProfileBooksService} from '@@app/profile/services/profile-books.service';
import {BookModel} from '@@share/models/book.model';
import {RouterReduxService} from '@@router/services/router-redux.service';

@Component({
  selector: 'app-edit-book-component',
  templateUrl: './edit-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppEditBookComponent implements OnInit {

  bookForm: FormGroup;
  private bookId: string;

  constructor(private profileBooksService: ProfileBooksService,
              private routerReduxService: RouterReduxService,
              private builder: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.bookId = this.routerReduxService.getBookId();
    this.profileBooksService.getBookById$(this.bookId)
      .subscribe(book => {
        this.bookForm = this.builder.group(book);
        this.cdr.detectChanges();
      });
  }

  save() {
    const book: BookModel = this.bookForm.value;
    book.id = this.bookId;
    this.profileBooksService.editBook$(book).subscribe();
  }
}
