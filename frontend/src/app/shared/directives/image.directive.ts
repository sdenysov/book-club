import {AppProperties} from '@@shared/properties/app.properties';
import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({selector: '[appImageName]'})
export class ImageDirective implements OnInit {

  @Input('appImageName') image: string;

  constructor(private renderer: Renderer2, private hostElementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const src = AppProperties.IMAGE_PATH + this.image;
    const hostElement = this.hostElementRef.nativeElement;
    this.renderer.setAttribute(hostElement, 'src', src);
  }
}
