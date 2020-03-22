import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-actions',
  templateUrl: 'book-actions.component.html',
  styleUrls: ['book-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
