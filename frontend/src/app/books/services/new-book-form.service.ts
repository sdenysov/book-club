import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {HttpErrorData} from '@@errors/models/http-error-data.model';
import * as HttpStatusCodes from 'http-status-codes';
import {EMPTY, throwError} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from '@@shared/models/user';
import {INewBook} from '@@books/models/new-book';
import {BooksRestService} from '@@books/services/books-rest.service';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';

@Injectable()
export class NewBookFormService {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private booksRestService: BooksRestService,
              private authReduxFacade: AuthReduxFacade) {
    this.form = this.fb.group({
      file: [null, Validators.required],
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  get file(): FormControl {
    return this.form.get('file') as FormControl;
  }

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.form.get('description') as FormControl;
  }

  get author(): FormControl {
    return this.form.get('author') as FormControl;
  }

  submit$() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return EMPTY;
    }
    const book: INewBook = this.createNewBook();
    return this.booksRestService.addBook$(book).pipe(
      catchError((httpErrorData: HttpErrorData) => {
        if (httpErrorData.response.status === HttpStatusCodes.BAD_REQUEST) {
          // TODO handle error
          return EMPTY;
        }
        return throwError(httpErrorData);
      })
    );
  }

  private createNewBook() {
    const user: IUser = this.authReduxFacade.getUser();
    return {...this.form.value, rating: 0, owner: user.id};
  }
}
