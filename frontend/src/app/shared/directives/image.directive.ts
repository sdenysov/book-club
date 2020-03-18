import {AppProperties} from '@@shared/properties/app.properties';
import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({selector: '[appImageSrc]'})
export class ImageDirective implements OnInit {

  @Input('appImageSrc') image: string;

  constructor(private renderer: Renderer2, private hostElementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const src = AppProperties.IMAGE_PATH + this.image;
    const hostElement = this.hostElementRef.nativeElement;
    this.renderer.setAttribute(hostElement, 'src', src);
  }
}
