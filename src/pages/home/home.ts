import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewLeanCanvasPage } from '../../pages/newleancanvas/newleancanvas';
import { NewMvpCanvasPage } from '../../pages/newmvpcanvas/newmvpcanvas';
import { NewBmcPage } from '../../pages/newbmc/newbmc';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

	}

	createLeanCanvas() {
		this.navCtrl.push(NewLeanCanvasPage);
	}

	createMVPCanvas() {
		this.navCtrl.push(NewMvpCanvasPage);	
	}

	createBMC() {
		this.navCtrl.push(NewBmcPage);
	}
}
