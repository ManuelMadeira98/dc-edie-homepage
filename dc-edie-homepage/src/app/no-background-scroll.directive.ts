import { Directive, Renderer2, OnInit, Input, OnChanges } from '@angular/core';

@Directive({
	selector: '[noBackgroundScroll]',
})
export class NoBackgroundScrollDirective implements OnChanges {
	@Input() noBackgroundScroll!: boolean;

	constructor(private renderer: Renderer2) {}

	ngOnChanges() {
		if (this.noBackgroundScroll) {
			this.renderer.setStyle(document.documentElement, 'overflow', 'hidden');
		} else {
			this.renderer.removeStyle(document.documentElement, 'overflow');
		}
	}
}
