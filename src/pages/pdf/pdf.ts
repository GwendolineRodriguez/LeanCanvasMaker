import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as pdfmake from 'pdfmake/build/pdfmake';
import { Extradata } from '../../providers/extradata';
import { EmailComposer } from '@ionic-native/email-composer';
//import { EmailComposer } from '../../../plugins/cordova-plugin-email';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

//var emailComposer: any = EmailComposer;
var pdfMake: any = pdfmake;

@Component({
	selector: 'page-pdf',
	templateUrl: 'pdf.html',
})

export class PdfPage {
	show: boolean = false;
	pdf : SafeResourceUrl;
	attachment: string;
	docDefinition: any;
	canva: any = {case1: '&nbsp;&nbsp;&nbsp;&nbsp;', case2: '', case3: '',
				  case4: '', case5: '', case6: '',
				  case7: '', case8: '', case9: ''};

	constructor(public navCtrl: NavController,
				 private emailComposer: EmailComposer,
				 public navParams: NavParams,
				 public extradata: Extradata,
				 public sanitizer: DomSanitizer) {
		var self = this;
		this.docDefinition = extradata.buildPdf(navParams.get('canva'), navParams.get('title'), navParams.get('canvatype'))
		pdfMake.createPdf(this.docDefinition).getBase64(function(buffer) {
			self.pdf = "data:application/pdf;base64,"+buffer;
			self.attachment ="base64:canva.pdf//" + buffer + "#zoom=300";
			self.show = true;
			console.log(self.pdf);
		});

		document.addEventListener('deviceready', function () {
			// cordova.plugins.email is now available
		}, false);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PdfPage');
	}

	sendEmail() {
		let email: any = {
			to: '',
			cc: '',
			attachments: [
				this.attachment
			],
			subject: 'Lean Canvas by 12MVP',
			body: 'Regarde mon nouveau lean canvas !',
			isHtml: true
		};
		this.emailComposer.open(email);
		console.log(this.emailComposer.open(email));
	}
}
