import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Add page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }
}
