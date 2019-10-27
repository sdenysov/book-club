import {ScreenLockReduxFacade} from '@@screen-lock/services/screen-lock-redux.facade';
import {Component} from '@angular/core';

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

  constructor(private screenLockReduxService: ScreenLockReduxFacade) { }
}
