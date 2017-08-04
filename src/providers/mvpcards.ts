import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';

import 'rxjs/add/operator/map';

@Injectable()
export class MvpCards {

	personaCards: any = [''];
	channelCards: any = [''];
	kpiCards: any = [''];
	persona: boolean = false;
	kpi: boolean = false;
	channels: boolean = false;
	personaCardsSelection: any = ['assets/mvpCards/kpi/taux_de_satisfaction.png', 
								  'assets/mvpCards/kpi/taux_de_satisfaction.png',
								  'assets/mvpCards/kpi/taux_de_satisfaction.png',
								  'assets/mvpCards/kpi/taux_de_satisfaction.png',
								  'assets/mvpCards/kpi/taux_de_satisfaction.png',
								  'assets/mvpCards/kpi/taux_de_satisfaction.png'];

	channelCardsSelection: any = [''];
	kpiCardsSelection: any = [''];
	
	constructor(private file: File) {}
	
	initCards() {
		this.file.listDir(this.file.applicationDirectory, './www/assets/mvpCards/kpi/').then(result => {
			for (let i = 0; i<100; i++) {
				if(result[i]) {
					this.kpiCards[i] = 'assets/mvpCards/kpi/'+String(result[i].name);
				}
			}
		}, (err) => {
			console.log('[error]');
			console.log(err);
		});
		this.file.listDir(this.file.applicationDirectory, './www/assets/mvpCards/persona/').then(result => {
			for (let i = 0; i<100; i++) {
				if(result[i]) {
					this.personaCards[i] = 'assets/mvpCards/persona/'+String(result[i].name);
					console.log(this.personaCards[i]);
				}
			}
		}, (err) => {
			console.log('[error]');
			console.log(err);
		});
		this.file.listDir(this.file.applicationDirectory, './www/assets/mvpCards/channels/').then(result => {
			for (let i = 0; i<100; i++) {
				if(result[i]) {
					this.channelCards[i] = 'assets/mvpCards/channels/'+String(result[i].name);
				}
			}
		}, (err) => {
			console.log('[error]');
			console.log(err);
		});
	}
	
	updateCardKeyboard(currentIndex) {
		if (currentIndex == 1) {
			this.persona = true;
			this.kpi = false;
			this.channels = false;
		} else if (currentIndex == 3) {
			this.persona = false;
			this.kpi = false;
			this.channels = true;
		} else {
			this.persona = false;
			this.kpi = true;
			this.channels = false;
		}
	}
	
	deleteCard(card, cat) {
		if (cat == 'persona') {
			for (let i = 0; i<100; i++) {
				if (this.personaCardsSelection[i]) {
					if (this.personaCardsSelection[i] == card) {
						this.personaCardsSelection[i] = '';
					}
				}
			}
		} else if (cat == 'kpi') {
			for (let i = 0; i<100; i++) {
				if (this.kpiCardsSelection[i]) {
					if (this.kpiCardsSelection[i] == card) {
						this.kpiCardsSelection[i] = '';
					}
				}
			}
		} else {
			for (let i = 0; i<100; i++) {
				if (this.channelCardsSelection[i]) {
					if (this.channelCardsSelection[i] == card) {
						this.channelCardsSelection[i] = '';
					}
				}
			}
		}
	}
}
