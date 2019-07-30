import {Component} from '@angular/core';
import {ScreenLockReduxService} from '@@screen-lock/services/screen-lock-redux.service';

@Component({
  selector: 'app-screen-overlay',
  template: `
    <div class="fullscreen-block" *ngIf="visible$ | async">
      <div class="cs-loader">
        <div class="cs-loader-inner">
          <label> &#9679;</label>
          <label> &#9679;</label>
          <label> &#9679;</label>
          <label> &#9679;</label>
          <label> &#9679;</label>
          <label> &#9679;</label>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./screen-overlay.component.scss']
})

export class ScreenOverlayComponent {

  visible$ = this.screenLockReduxService.isScreenLocked$;

  constructor(private screenLockReduxService: ScreenLockReduxService) { }
}
