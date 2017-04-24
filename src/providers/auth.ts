import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';

@Injectable()
export class Auth {

fireAuth: any;
userProfile:any;

constructor(public af: AngularFire) {
	af.auth.subscribe( user => {
            if (user) {
                this.fireAuth = user.auth;
                console.log(user);
            }
        });
	    this.userProfile = firebase.database().ref('/users');

}


loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.login({ email: newEmail, password: newPassword });
}

resetPassword(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
}

logoutUser(): firebase.Promise<any> {
    return this.af.auth.logout();
}

signupUser(newName: string,lastName:string,newAdress:string,newTel:string, newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.af.auth.createUser({ email: newEmail, password: newPassword }).then((newUser) => {
      this.userProfile.child(newUser.uid).set({
      First_Name: newName,
      Last_Name: lastName,
      email: newEmail,
      Address: newAdress,
      Telephone: newTel
      });
    });


}

}