import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
    ),
  ]);

  isSignedIn = false;

  constructor(
    private firebaseService: AuthenticationService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  async onSignIn(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isAuthenticated) {
      this.isSignedIn = true;
      return this._route.navigate(['/my-courses']);
    }
    return this._route.navigate(['/signup']);
  }

  onSignUp() {
    return this._route.navigate(['/my-courses']);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (
      this.password.hasError('pattern') ||
      this.password.hasError('required')
    ) {
      return 'You must enter a valid password';
    }
    return '';
  }
}
