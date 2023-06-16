import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-contact-input',
	templateUrl: './contact-input.component.html',
	styleUrls: ['./contact-input.component.scss'],
})
export class ContactInputComponent {
	@Input() tabIndex!: number;
}
