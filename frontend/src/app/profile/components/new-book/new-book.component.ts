import {Component, OnInit} from '@angular/core';
import {BookModel} from '@@share/models/book.model';
import {FormControl, FormGroup} from '@angular/forms';
import {BooksRestService} from '@@core/services/books/books-rest.service';

@Component({
  selector: 'app-new-book-component',
  templateUrl: './new-book.component.html',
})
export class AppNewBookComponent implements OnInit {

  newBookForm: FormGroup;

  constructor(private booksRestService: BooksRestService) {}

  ngOnInit() {
    this.newBookForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl('')
    });
  }

  addBook() {
    const book: BookModel = this.newBookForm.value;
    book.rating = 3;
    this.booksRestService.addBook$(book);
  }
}
