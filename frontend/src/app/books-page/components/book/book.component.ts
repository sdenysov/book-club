import {Component, Input} from '@angular/core';
import {BookModel} from '@@books-page/models/book.model';

@Component({
  selector: 'app-book-component',
  templateUrl: './book.component.html',
})
export class AppBookComponent {
  @Input() book: BookModel;
}
