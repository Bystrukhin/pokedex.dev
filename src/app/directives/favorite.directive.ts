import {Directive, Renderer2, ElementRef, HostBinding, DoCheck, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})

export class FavoriteDirective implements AfterViewInit, DoCheck {

  private color: String = 'white';

  constructor(private element: ElementRef, private renderer: Renderer2) {
      const tempName = JSON.parse(localStorage.getItem('pokemonsToggle') || '[]');
      if (tempName.includes(this.element.nativeElement.id)) {
          this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
      } else {
          this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
      }
  }

    ngAfterViewInit() {
      const tempName = JSON.parse(localStorage.getItem('pokemonsToggle') || '[]');
      if (tempName.includes(this.element.nativeElement.id)) {
          this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
      } else {
          this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
      }
  }

  ngDoCheck() {
      const tempName = JSON.parse(localStorage.getItem('pokemonsToggle') || '[]');
      if (tempName.includes(this.element.nativeElement.id)) {
          this.color = 'black';
      } else {
          this.color = 'white';
      }
  }

  @HostBinding('style.color') get setClicked() {
      return this.color;
  }
}
