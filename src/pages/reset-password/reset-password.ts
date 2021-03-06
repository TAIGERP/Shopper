import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import { EmailValidator } from '../../validators/email';

/*
  Generated class for the ResetPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {
resetPasswordForm: any;

  constructor(public authData: Auth, public formBuilder: FormBuilder,
    public nav: NavController, public alertCtrl: AlertController) {
  	 this.resetPasswordForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required,
            EmailValidator.isValid])]
    })
  }

resetPassword(){
    if (!this.resetPasswordForm.valid){
        console.log(this.resetPasswordForm.value);
    } else {
        this.authData.resetPassword(this.resetPasswordForm.value.email)
        .then((user) => {
            let alert = this.alertCtrl.create({
                message: "We just sent you a reset link to your email",
                buttons: [{ text: "Ok", role: 'cancel',
                    handler: () => {
                        this.nav.pop();
                    }
                }]
            });
        alert.present();
        }, (error) => {
            var errorMessage: string = error.message;
            let errorAlert = this.alertCtrl.create({
                message: errorMessage,
                buttons: [{ text: "Ok", role: 'cancel' }]
            });

            errorAlert.present();
        });
    }
}


}
