import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPagePage } from '../pages/first-page/first-page';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { GroceryPage } from '../pages/grocery/grocery';
import { ChoicesPage } from '../pages/choices/choices';
import { Pictures } from '../providers/pictures';
import { Auth } from '../providers/auth';
import { DetailsPage } from '../pages/details/details';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyDdLkO2Rl4hG7bT0dgtNFiVE8aF7F36HEo",
    authDomain: "shopper-41d9f.firebaseapp.com",
    databaseURL: "https://shopper-41d9f.firebaseio.com",
    storageBucket: "shopper-41d9f.appspot.com",
    messagingSenderId: "1054178679274"
  };
 
 const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPagePage,
    RegisterPage,
    LoginPage,
    ResetPasswordPage,
    GroceryPage,
    ChoicesPage,
    DetailsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPagePage,
    RegisterPage,
    LoginPage,
    ResetPasswordPage,
    GroceryPage,
    ChoicesPage,
    DetailsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Auth, Pictures ]
})
export class AppModule {}
