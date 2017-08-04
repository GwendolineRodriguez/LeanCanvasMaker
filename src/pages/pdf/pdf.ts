import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import * as pdfmake from 'pdfmake/build/pdfmake';
import { Extradata } from '../../providers/extradata';
import { CompanyForm } from '../companyform/companyform';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

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
	canva: any = {case1: '', case2: '', case3: '',
				  case4: '', case5: '', case6: '',
				  case7: '', case8: '', case9: ''};

	constructor(public navCtrl: NavController,
				 private socialSharing: SocialSharing,
				 public navParams: NavParams,
				 public extradata: Extradata,
				 public modalCtrl: ModalController,
				 public sanitizer: DomSanitizer) {
		var self = this;
		this.docDefinition = extradata.buildPdf(navParams.get('canva'), navParams.get('title'), navParams.get('canvatype'))
		pdfMake.createPdf(this.docDefinition).getBase64(function(buffer) {
			self.pdf = "data:application/pdf;base64," + buffer;
			self.attachment = "data:application/pdf;base64," + buffer;
			self.show = true;
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PdfPage');
	}

	sendEmail() {
		this.socialSharing.canShareViaEmail().then(() => {
			console.log('success');
		}).catch(() => {
			this.extradata.presentToast('Un problème est survenu');
		});

		this.socialSharing.shareViaEmail('Un canva by 12MVP..!', 'Lean Canvas by 12MVP', null, null, null, [this.attachment]).then(() => {
			console.log('success');
		}).catch((e) => {
			console.log('fail!')
			console.log(e);
		});
	}

	openForm() {
		let profileModal = this.modalCtrl.create(CompanyForm, { userId: 8675309 });
		profileModal.present();
		profileModal.onDidDismiss(data => {
			if (data) {
				this.socialSharing.canShareViaEmail().then(() => {
					console.log('success');
				}).catch(() => {
					this.extradata.presentToast('Un problème est survenu');
				});

				this.socialSharing.shareViaEmail(data, 'Lean Canvas by 12MVP', ['fred@12mvp.com'], null, null, [this.attachment]).then(() => {
					console.log('success');
				}).catch((e) => {
					console.log('fail!')
					console.log(e);
				});
			}
		});
	}

}
