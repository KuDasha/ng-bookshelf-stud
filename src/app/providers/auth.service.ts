import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from './user.service';
@Injectable()
export class AuthService {
  user: User;
  constructor(
    private ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private router: Router,
    public userservice: UserService
  ) {
    this.checkLocalStorage();
  }
  
  checkLocalStorage() {
    if (!localStorage.getItem('user')) {
      this.getDataFromFirebase();
    } else {
      console.log('localStorage ready!');
    }
  }
  
  getDataFromFirebase() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth; 
        console.log('Authenticated');
        this.userservice.setUserLoggedIn(this.user); 
      } else {
        console.log('Not authenticated');
      }
    });
  }
  
  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(data => {
        this.ngZone.run(() => this.router.navigate(['dashboard'])).then();
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  logout() {
    this.userservice.clearLocalStorage();
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
