import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  templateUrl: 'new-book-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewBookPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
