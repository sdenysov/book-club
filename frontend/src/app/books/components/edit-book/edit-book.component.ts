import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IBook} from '@@books/models/book';
import {first} from 'rxjs/operators';
import {NavigationService} from '@@router/services/navigation.service';
import {BooksService} from '@@books/services/books.service';

@Component({
  selector: 'app-edit-book-component',
  templateUrl: 'edit-book.component.html',
  styleUrls: ['edit-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppEditBookComponent implements OnInit {

  private bookId: string;
  public bookForm: FormGroup;

  constructor(private booksService: BooksService,
              private routerReduxFacade: RouterReduxFacade,
              private navigationService: NavigationService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.bookId = this.routerReduxFacade.getBookId();
    this.booksService.getBookById$(this.bookId)
      .subscribe((book: IBook) => {
        this.bookForm = this.fb.group({
          title: [book.title, [Validators.required, Validators.minLength(3)]],
          description: [book.description, [Validators.required, Validators.minLength(3)]],
          author: [book.author, [Validators.required, Validators.minLength(3)]]
        });
        this.cdr.detectChanges();
      });
  }

  get title(): FormControl {
    return this.bookForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.bookForm.get('description') as FormControl;
  }

  get author(): FormControl {
    return this.bookForm.get('author') as FormControl;
  }

  save() {
    const book: IBook = this.bookForm.value;
    book.id = this.bookId;
    this.booksService.editBook$(book).pipe(first()).subscribe(() => this.navigationService.goToBookDetailPage(book.id));
  }
}
