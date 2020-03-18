import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-actions',
  templateUrl: 'book-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
