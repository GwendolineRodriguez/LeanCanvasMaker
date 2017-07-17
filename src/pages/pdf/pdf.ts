import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as pdfmake from 'pdfmake/build/pdfmake';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { Extradata } from '../../providers/extradata';


var pdfMake: any = pdfmake;

@Component({
	selector: 'page-pdf',
	templateUrl: 'pdf.html',
})

export class PdfPage {
	docDefinition: any;
	canva: any = {case1: '', case2: '', case3: '',
				  case4: '', case5: '', case6: '',
				  case7: '', case8: '', case9: ''};


	constructor(public navCtrl: NavController,
				 public navParams: NavParams,
				 public extradata: Extradata,
				 private document: DocumentViewer) {
		var options: any = { title: navParams.get('title') };

		this.docDefinition = extradata.buildPdf(navParams.get('canva'), navParams.get('title'), navParams.get('canvatype'))
		pdfMake.createPdf(this.docDefinition).getBuffer(function(buffer) {
			console.log('___________');
//			let options: any = { title: navParams.get('title') };

			console.log(document.viewDocument(buffer, 'application/pdf', options));
			console.log(buffer);
		});
		//		console.log(pdfMake.createPdf(this.docDefinition));
		//		pdfMake.createPdf(this.docDefinition).download();

		// To test on mobile : //
		//		this.document.viewDocument(this.urlpdf, 'application/pdf', this.options);
		//		console.log(this.document.viewDocument(this.urlpdf, 'application/pdf', this.options));
		this.document.viewDocument('assets/files/file.pdf', 'application/pdf', options);
		//		console.log(this.document.viewDocument('assets/files/file.pdf', 'application/pdf', this.options));
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PdfPage');
	}
}
