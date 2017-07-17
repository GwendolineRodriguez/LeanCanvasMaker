import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { PdfPage } from '../../pages/pdf/pdf';

@Component({
	selector: 'page-newleancanvas',
	templateUrl: 'newleancanvas.html',
})

export class NewLeanCanvasPage {
	@ViewChild(Slides) slides: Slides;
	title: any = '';
	canva: any = {case1: '', case2: '', case3: '',
				  case4: '', case5: '', case6: '',
				  case7: '', case8: '', case9: ''};
	canvatype: any = {
		title: 'Lean Canvas',
		case1: 'Problèmes', case2: 'Customer Segment', case3: 'Solutions',
		case4: 'Canaux', case5: 'Keys Metrics', case6: 'Unfair Advantage',
		case7: 'Coûts', case8: 'Revenues', case9: 'Unique Value Proposition'};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ngAfterViewInit() {
		this.slides.freeMode = true;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NewleancanvasPage');
	}

	createPDF() {
		this.navCtrl.push(PdfPage, {
			canva: this.canva,
			title: this.title,
			canvatype: this.canvatype
		});
	}

}
