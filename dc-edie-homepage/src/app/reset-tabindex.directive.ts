import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[resetTabindex]',
})
export class ResetTabindexDirective {
	@Input() resetTabindex!: boolean;

	constructor(private elementRef: ElementRef) {}

	@HostListener('keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Tab' && this.resetTabindex) {
			const elements = this.elementRef.nativeElement.querySelectorAll('[tabIndex]');
			const lastTabIndex = elements[elements.length - 1].tabIndex;
			const currentTabIndex = (event.target as HTMLElement)['tabIndex'];

			if (currentTabIndex === lastTabIndex) {
				event.preventDefault();
				elements[0].focus();
			}
		}
	}
}
