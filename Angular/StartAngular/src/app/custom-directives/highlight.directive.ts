import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef.nativeElement);
    // thay doi style
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.transition = 'all 0.5s';

    // thay doi class
    this.elementRef.nativeElement.classList.add('text-white', 'w-25');
  }

  // HostListener: lang nghe su kien
  @HostListener('click') handleClick() {
    this.elementRef.nativeElement.classList.toggle('w-100');
  }
  @HostListener('mouseenter') handleMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') handleMouseLeavr() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
