import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
})
export class CardStyleDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') onEnter() {
    this.render.setStyle(
      this.element.nativeElement,
      'border',
      '2px solid purple'
    );
  }

  @HostListener('mouseleave') onLeave() {
    this.render.setStyle(
      this.element.nativeElement,
      'border',
      '1px solid purple'
    );
  }
}
