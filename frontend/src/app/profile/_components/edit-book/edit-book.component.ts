import {ProfileBooksService} from '@@app/profile/services/profile-books.service';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {Book} from '@@share/models/book';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-book-component',
  templateUrl: './edit-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppEditBookComponent implements OnInit {

  bookForm: FormGroup;
  private bookId: string;

  constructor(private profileBooksService: ProfileBooksService,
              private routerReduxFacade: RouterReduxFacade,
              private builder: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.bookId = this.routerReduxFacade.getBookId();
    this.profileBooksService.getBookById$(this.bookId)
      .subscribe(book => {
        this.bookForm = this.builder.group(book);
        this.cdr.detectChanges();
      });
  }

  save() {
    const book: Book = this.bookForm.value;
    book.id = this.bookId;
    this.profileBooksService.editBook$(book).subscribe();
  }
}
