import { Component, Input } from '@angular/core';
import { IService } from '../types';

@Component({
	selector: 'app-card-service',
	templateUrl: './card-service.component.html',
	styleUrls: ['./card-service.component.scss'],
})
export class CardServiceComponent {
	@Input() service!: IService;
}
