import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBook} from '@@books/models/book';
import {NavigationService} from '@@router/services/navigation.service';

@Component({
  selector: 'app-find-book-component',
  templateUrl: 'book-finder.component.html',
  styleUrls: ['book-finder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFinderComponent {

  @Input() book: IBook;

  constructor(private navigationService: NavigationService) {}

  goToBookDetails() {
    this.navigationService.goToBookDetailPage(this.book.id);
  }
}
