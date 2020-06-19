import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {BooksService} from '@@books/services/books.service';
import {NavigationService} from '@@router/services/navigation.service';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {IUser} from '@@shared/models/user';
import {INewBook} from '@@books/models/new-book';

@Component({
  selector: 'app-new-book-component',
  templateUrl: './new-book.component.html',
})
export class AppNewBookComponent implements OnInit {

  newBookForm: FormGroup;

  constructor(private booksService: BooksService,
              private navigationService: NavigationService,
              private routerReduxFacade: RouterReduxFacade,
              private authReduxFacade: AuthReduxFacade,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.newBookForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  get title(): FormControl {
    return this.newBookForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.newBookForm.get('description') as FormControl;
  }

  get author(): FormControl {
    return this.newBookForm.get('author') as FormControl;
  }

  addBook() {
    const user: IUser = this.authReduxFacade.getUser();
    const book: INewBook = this.newBookForm.value;
    book.rating = 0;
    book.owner = user.id;
    this.booksService.addBook$(book).pipe(first()).subscribe(() => this.navigationService.goToUserBooks(user.username));
  }
}
