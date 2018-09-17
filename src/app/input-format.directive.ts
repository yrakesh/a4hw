import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format: string = 'lowercase';

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = this.format == 'lowercase' ? value.toLowerCase() : value.toUpperCase();
  }



}
