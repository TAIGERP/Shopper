import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FirstPagePage } from '../pages/first-page/first-page';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AngularFire } from 'angularfire2';
import { GroceryPage } from '../pages/grocery/grocery';

import { ChoicesPage } from '../pages/choices/choices';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;
  pages: Array<{title: string, component: any}>;


  constructor(platform: Platform, public af: AngularFire) {

    this.pages = [
      { title: 'Grocery', component: GroceryPage },
      { title: 'Supplies', component: ChoicesPage },
      { title: 'Add Lists', component: HomePage }
    ];

    const authObserver = af.auth.subscribe( user => {
  if (user) {
    this.rootPage = GroceryPage;
    authObserver.unsubscribe();
  } else {
    this.rootPage = FirstPagePage;
    authObserver.unsubscribe();
  }
});


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
