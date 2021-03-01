import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated = false;
  constructor(public firebaseAuth: AngularFireAuth) {}

  async signin(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  signout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

  signedIn() {
    return !!localStorage.getItem('user');
  }
}
