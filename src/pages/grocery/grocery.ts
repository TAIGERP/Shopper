import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pictures } from '../../providers/pictures';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { DetailsPage } from '../details/details';
/*
  Generated class for the Grocery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grocery',
  templateUrl: 'grocery.html'
})
export class GroceryPage {
images: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,af: AngularFire,pic: Pictures, public navParams: NavParams) {
  	this.images = af.database.list('/grocery');


  }


  details(image, imageTitle) {
  	this.navCtrl.push(DetailsPage , {image:image, imageTitle:imageTitle});
  }



}
