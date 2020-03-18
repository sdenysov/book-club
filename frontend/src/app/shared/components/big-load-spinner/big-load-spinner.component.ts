import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-big-load-spinner',
  template: `
    <div class="load-spinner-container">
      <div class="logo"></div>
      <svg class="spinner" viewBox="25 25 50 50">
        <circle class="circle" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
      </svg>
    </div>
  `,
  styleUrls: ['big-load-spinner.component.scss'],
  providers: [TranslateService]
})
export class BigLoadSpinnerComponent implements OnInit {

  constructor(private ts: TranslateService) { }

  ngOnInit() { }
}
