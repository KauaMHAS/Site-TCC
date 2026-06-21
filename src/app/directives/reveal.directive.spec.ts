import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { RevealDirective } from './reveal.directive';

describe('RevealDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('div'));
    const renderer2 = {} as Renderer2;
    const ngZone = {} as NgZone;

    const directive = new RevealDirective(elementRef, renderer2, ngZone);
    expect(directive).toBeTruthy();
  });
});
