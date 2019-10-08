import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'user-books-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBooksPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
