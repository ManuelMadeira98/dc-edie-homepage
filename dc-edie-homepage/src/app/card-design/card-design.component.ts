import { Component, Input } from '@angular/core';
import { IDesign } from '../types';

@Component({
	selector: 'app-card-design',
	templateUrl: './card-design.component.html',
	styleUrls: ['./card-design.component.scss'],
})
export class CardDesignComponent {
	@Input() design!: IDesign;
}
