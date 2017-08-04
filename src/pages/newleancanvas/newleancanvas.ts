import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { PdfPage } from '../../pages/pdf/pdf';
import { Keyboard } from '@ionic-native/keyboard';
import { Extradata } from '../../providers/extradata';
import { MvpCards } from '../../providers/mvpcards';
//import { ContentDrawer } from '../../components/content-drawer/content-drawer';

@Component({
	selector: 'page-newleancanvas',
	templateUrl: 'newleancanvas.html',
})

export class NewLeanCanvasPage {
//	@ViewChild(ContentDrawer) contentDrawer : ContentDrawer;
	@ViewChild(Slides) slides: Slides;
	drawerOptions: any;
	title: any = '';
	canva: any = {case1: '', case2: '', case3: '',
				  case4: '', case5: '', case6: '',
				  case7: '', case8: '', case9: ''};
	canvatype: any = {
		title: 'Lean Canvas',
		case1: 'Problèmes', case2: 'Customer Segment', case3: 'Solutions',
		case4: 'Canaux', case5: 'Keys Metrics', case6: 'Unfair Advantage',
		case7: 'Coûts', case8: 'Revenues', case9: 'Unique Value Proposition'};

	constructor(public navCtrl: NavController,
				 public navParams: NavParams,
				 public extradata: Extradata,
				 public mvpCards: MvpCards,
				 public platform: Platform,
				 private keyboard: Keyboard) {
//		this.drawerOptions = {
//			handleHeight: 0,
//			thresholdFromBottom: (this.platform.height()*0.61),
//			thresholdFromTop: (this.platform.height()),
//			bounceBack: true
//		};
//		this.mvpCards.initCards();
//		this.showCards();
//		for (let i = 0; i<100; i++) {
//				if(this.mvpCards.personaCards[i]) {
//					console.log('fullfilled ? ');
//					console.log(this.mvpCards.personaCards[i]);
//				}
//			}
	}

	ngAfterViewInit() {
		this.slides.freeModeSticky = true;
//		if (this.contentDrawer) {
//			this.contentDrawer.hideKeyboard();
//		}
	}

	slideChanged() {
		this.keyboard.close();
//		if (this.contentDrawer) {
//			this.contentDrawer.hideKeyboard();
//		}
//		let currentIndex = this.slides.getActiveIndex();
//		this.mvpCards.updateCardKeyboard(currentIndex);		
	}

	showCards() {
		if (this.keyboard) {
			this.keyboard.close();}
//		if(this.contentDrawer) {
//			this.contentDrawer.showKeyboard();
//		}
	}

	addCard(card) {
//		this.mvpCards.personaCardsSelection[0] = card;
//		this.contentDrawer.hideKeyboard();
	}

	createPDF() {
		this.navCtrl.push(PdfPage, {
			canva: this.canva,
			title: this.title,
			canvatype: this.canvatype
		});
	}
}
