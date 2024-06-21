import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.background="green"   
  }

}
