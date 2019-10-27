import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Book} from '@@share/models/book';

@Component({
  selector: 'app-my-book-component',
  templateUrl: './my-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMyBookComponent {

  @Input() book: Book;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges:', changes);
  // }
  //
  // ngOnInit(): void {
  //   console.log('ngOnInit:');
  // }
  //
  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }
  //
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  //
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }
  //
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  //
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  //
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }
}
