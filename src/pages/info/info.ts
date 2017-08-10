import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-info',
	templateUrl: 'info.html',
})
export class InfoPage {
	lean: boolean = false;
	bmc: boolean = false;
	mvp: boolean = false;

	constructor(public navCtrl: NavController,
				 public navParams: NavParams) {
		let tmp;
		tmp = navParams.get('type');
		this.setText(tmp);
	}

	setText(tmp) {
		if (tmp == 'lean') {
			this.lean = true;
		} else if (tmp == 'bmc') {
			this.bmc = true;
		} else {
			this.mvp = true;
		}
	}

}
