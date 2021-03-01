import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
    ),
  ]);
  confirmPassword = new FormControl('', [
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

  onSignUp() {
    if (
      this.email.value === 'test@gmail.com' &&
      this.password.value === 'Test123$'
    ) {
      return this._route.navigate(['/my-course']);
    }
    return this._route.navigate(['/signup']);
  }
}
