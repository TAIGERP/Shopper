import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Pictures provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Pictures {

items: FirebaseListObservable<any>;
  constructor(public http: Http,af: AngularFire) {
	this.items = af.database.list('/grocery', { preserveSnapshot: true}) ;
    
    //this.storage = firebase.storage().ref('/Grocery');
    //this.storage.getDownloadURL().then(url => this.image = url);
  }




}
