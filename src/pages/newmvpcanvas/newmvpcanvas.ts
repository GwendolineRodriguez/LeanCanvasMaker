import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-newmvpcanvas',
  templateUrl: 'newmvpcanvas.html',
})

export class NewMvpCanvasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewmvpcanvasPage');
  }

}
