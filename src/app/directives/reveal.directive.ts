import { Directive, ElementRef, AfterViewInit, OnDestroy, Renderer2, NgZone } from '@angular/core';

@Directive({
  selector: '[appAutoReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private mutationObserver?: MutationObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.setupObserver();
      this.observeNewElements();
    });
  }

  private setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'in');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    this.observeAll();
  }

  private observeAll() {
    const elements = this.el.nativeElement.querySelectorAll('.reveal');
    elements.forEach((element) => this.observer?.observe(element));
  }

  private observeNewElements() {
    this.mutationObserver = new MutationObserver(() => {
      this.observeAll();
    });
    this.mutationObserver.observe(this.el.nativeElement, {
      childList: true,
      subtree: true
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.mutationObserver?.disconnect();
  }
}
