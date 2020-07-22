import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: 'new-book-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewBookPageComponent {}
