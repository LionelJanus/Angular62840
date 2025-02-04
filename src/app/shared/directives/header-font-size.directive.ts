import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeaderFontSize]', // Esta será la directiva que usaremos en las cabeceras
  standalone:false
})
export class HeaderFontSizeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Cambiamos el tamaño de la fuente al inicial
    this.setFontSize('20px');
  }

  private setFontSize(size: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', size);
  }
}
