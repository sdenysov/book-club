import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-collapsible-section',
  templateUrl: 'collapsible-section.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({height: '*'})),
      state('closed', style({height: '0'})),
      transition('open <=> closed', animate('200ms ease-in'))
    ])
  ],
  styleUrls: ['collapsible-section.component.scss']
})
export class CollapsibleSectionComponent {

  @Input() caption: string;
  public isOpen = true;
}
