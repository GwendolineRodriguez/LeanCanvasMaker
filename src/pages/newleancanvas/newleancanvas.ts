import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-newleancanvas',
  templateUrl: 'newleancanvas.html',
})
export class NewLeanCanvasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewleancanvasPage');
  }

}
