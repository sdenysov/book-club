import {Component, OnInit} from '@angular/core';
import {BookModel} from '@@share/models/book.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BooksRestService} from '@@core/services/books/books-rest.service';

@Component({
  selector: 'app-new-book-component',
  templateUrl: './new-book.component.html',
})
export class AppNewBookComponent implements OnInit {

  newBookForm: FormGroup;

  constructor(private booksRestService: BooksRestService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.newBookForm = this.builder.group({
      title: '',
      author: '',
      description: ''
    });
  }

  addBook() {
    const book: BookModel = this.newBookForm.value;
    book.rating = 3;
    this.booksRestService.addBook$(book);
  }
}
