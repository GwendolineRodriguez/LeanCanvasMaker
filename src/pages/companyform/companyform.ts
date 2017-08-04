import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-companyform',
	templateUrl: 'companyform.html',
})
export class CompanyForm {
	companyname: any;
	name: any;
	firstname: any;

	constructor(public navCtrl: NavController,
				 public navParams: NavParams,
				 public viewCtrl: ViewController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CompanyformPage');
	}

	dismiss() {
		this.viewCtrl.dismiss();	
	}

	sendEmail() {
		let data = 'Nom : '+this.name+'\nPrénom : '+this.firstname+'\nEntreprise : '+this.companyname
		this.viewCtrl.dismiss(data);
	}

}
