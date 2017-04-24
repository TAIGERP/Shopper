import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
/*
  Generated class for the FirstPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-first-page',
  templateUrl: 'first-page.html'
})
export class FirstPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  
  login() {
  	this.navCtrl.push(LoginPage);
  }
  register() {
  	this.navCtrl.push(RegisterPage);
  }
  test() {

  }
}
