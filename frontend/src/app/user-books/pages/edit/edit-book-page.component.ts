import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'edit-book-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBookPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
