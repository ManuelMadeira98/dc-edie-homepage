import { Component } from '@angular/core';
import { IDesign, IService } from './types';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	readonly loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.";
	readonly services: IService[] = [
		{ iconName: 'edit', title: 'UI/UX Design', description: this.loremIpsum, tabIndex: 8 },
		{ iconName: 'code', title: 'Front End', description: this.loremIpsum, tabIndex: 10 },
		{ iconName: 'storage', title: 'Back End', description: this.loremIpsum, tabIndex: 12 }, 
	]
	readonly designs: IDesign[] = [
		{ imageUrl: 'assets/smarthome.jpg', theme: 'Full stack application', project: 'Smart home dashboard' },
		{ imageUrl: 'assets/onboard.png', theme: 'UI/UX design', project: 'Onboard application' },
		{ imageUrl: 'assets/booking.png', theme: 'Mobile application', project: 'Booking system' }, 
		{ imageUrl: 'assets/juice-product.png', theme: 'Front End application', project: 'Juice product homepage' }
	]
}
