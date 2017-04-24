import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { EmailValidator } from '../../validators/email';




/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

loginForm: any;
loading: any;

  constructor(public nav: NavController, public authData: Auth,
public formBuilder: FormBuilder, public alertCtrl: AlertController,
public loadingCtrl: LoadingController) {

  	this.loginForm = formBuilder.group({
    email: ['', Validators.compose([Validators.required, 
        EmailValidator.isValid])],
    password: ['', Validators.compose([Validators.minLength(6), 
    Validators.required])]
});


  }

goToResetPassword(){
    this.nav.push(ResetPasswordPage);
}

createAccount(){
    this.nav.push(RegisterPage);
}

loginUser(){
  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authData.loginUser(this.loginForm.value.email, 
      this.loginForm.value.password).then( authData => {
        this.nav.setRoot(HomePage);
  }, error => {
    this.loading.dismiss().then( () => {
      let alert = this.alertCtrl.create({
        message: error.message,
        buttons: [
        {
          text: "Ok",
          role: 'cancel'
        }
        ]
  });
    alert.present();
  });
});

  this.loading = this.loadingCtrl.create({
    dismissOnPageChange: true,
  });
  this.loading.present();
  }
}


}
