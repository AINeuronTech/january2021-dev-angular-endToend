import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private _route: Router) {}

  ngOnInit(): void {}

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

  onSignIn() {
    if (
      this.email.value === 'test@gmail.com' &&
      this.password.value === 'Test123$'
    ) {
      return this._route.navigate(['/my-course']);
    }
    return this._route.navigate(['/signup']);
  }

  onSignUp() {
    return this._route.navigate(['/signup']);
  }
}
