import {ProfileBooksService} from '@@app/profile/services/profile-books.service';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '@@books/models/book';

@Component({
  selector: 'app-edit-book-component',
  templateUrl: './edit-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppEditBookComponent implements OnInit {

  private bookId: string;
  public bookForm: FormGroup;

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
    const book: IBook = this.bookForm.value;
    book.id = this.bookId;
    this.profileBooksService.editBook$(book).subscribe();
  }
}
