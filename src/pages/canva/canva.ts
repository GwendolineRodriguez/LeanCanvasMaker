import { Component, ViewChild } from '@angular/core';
import { Navbar, NavController, NavParams, AlertController, Slides, Platform } from 'ionic-angular';
import { PdfPage } from '../../pages/pdf/pdf';
import { Keyboard } from '@ionic-native/keyboard';
import { Extradata } from '../../providers/extradata';
import { Canvadata } from '../../providers/canvadata';
import { MvpCards } from '../../providers/mvpcards';
import { InfoPage } from '../../pages/info/info';

@Component({
	selector: 'page-canva',
	templateUrl: 'canva.html',
})

export class CanvaPage {
	@ViewChild(Slides) slides: Slides;
	@ViewChild(Navbar) navBar: Navbar;
	canvatype: any;
	drawerOptions: any;
	title: any = '';
	canva: any = {case1: '', case2: '', case3: '',
				  case4: '', case5: '', case6: '',
				  case7: '', case8: '', case9: ''};

	constructor(public navCtrl: NavController,
				 public navParams: NavParams,
				 private alertController: AlertController,
				 public extradata: Extradata,
				 public canvadata: Canvadata,
				 public mvpCards: MvpCards,
				 public platform: Platform,
				 private keyboard: Keyboard) {
		this.canvatype = this.navParams.get('type');
		this.canvadata.initData(this.canvatype);
	}

	ionViewDidLoad() {
		this.setBackButtonAction()
	}

	setBackButtonAction(){
		this.navBar.backButtonClick = () => {
			let alert = this.alertController.create({
				title: 'Attention',
				subTitle: 'En revenant sur l\'accueil, vous perdez les données de ce canvas',
				buttons: [
					{
						text: 'Annuler',
						role: 'cancel',
					},
					{
						text: 'Ok',
						handler: () => {
							this.navCtrl.pop()
						}
					}
				]
			});
			alert.present();
		}
	}

	ngAfterViewInit() {
		this.slides.freeModeSticky = true;
	}

	slideChanged() {
		this.keyboard.close();
    }

	showCards() {
		if (this.keyboard) {
			this.keyboard.close();}
	}

	addCard(card) {
	}

	createPDF() {
		this.navCtrl.push(PdfPage, {
			canva: this.canva,
			title: this.title,
			canvatype: this.canvadata.canva
		});
	}

	info() {
		this.navCtrl.push(InfoPage, {
			type: this.canvatype
		});
	}
	
	goToNextSlide() {
		this.slides.slideNext();
	}
}
