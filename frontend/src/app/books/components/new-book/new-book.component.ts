import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NavigationService} from '@@router/services/navigation.service';
import {RouterReduxFacade} from '@@router/store/router-redux.facade';
import {AuthReduxFacade} from '@@auth/store/auth-redux.facade';
import {BooksRestService} from '@@books/services/books-rest.service';
import {NewBookFormService} from '@@books/services/new-book-form.service';
import {IUser} from '@@shared/models/user';
import {FileUploadingService} from '@@core/services/files-uploading.service';
import {FileUploader} from 'ng2-file-upload';
import {CollectionUtils} from '@@shared/utils/collection.utils';

@Component({
  selector: 'app-new-book-component',
  templateUrl: './new-book.component.html',
  styleUrls: ['new-book.component.scss'],
  providers: [NewBookFormService, FileUploadingService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNewBookComponent implements OnInit {

  public newBookForm: FormGroup;
  public uploader: FileUploader;
  public response: string;

  constructor(private booksRestService: BooksRestService,
              private navigationService: NavigationService,
              private routerReduxFacade: RouterReduxFacade,
              private authReduxFacade: AuthReduxFacade,
              private newBookFormService: NewBookFormService,
              private uploadingFileService: FileUploadingService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.newBookForm = this.newBookFormService.form;
    this.uploader = this.uploadingFileService.uploader;
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.cdr.detectChanges();
    };
    this.uploader.onProgressItem = (progress: any) => {
      this.cdr.detectChanges();
    };
  }

  get file(): FormControl {
    return this.newBookFormService.file;
  }

  get title(): FormControl {
    return this.newBookFormService.title;
  }

  get description(): FormControl {
    return this.newBookFormService.description;
  }

  get author(): FormControl {
    return this.newBookFormService.author;
  }

  get uploadItem() {
    return CollectionUtils.getFirstItem(this.uploader.queue);
  }

  addBook() {
    this.newBookFormService.submit$().subscribe(() => {
      const user: IUser = this.authReduxFacade.getUser();
      this.navigationService.goToUserBooks(user.username);
    });
  }

  upload() {
    this.uploader.uploadAll();
  }
}
