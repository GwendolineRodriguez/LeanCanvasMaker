import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CanvaPage } from '../../pages/canva/canva';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {}

	createCanva(canvatype) {
		this.navCtrl.push(CanvaPage, {
			type: canvatype
		});
	}
}
