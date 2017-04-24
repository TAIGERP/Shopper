import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

 	image:any;
 	imageTitle:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.image = this.navParams.get('image');
  	this.imageTitle = this.navParams.get('imageTitle');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }



}
