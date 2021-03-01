import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _route: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('user') !== null) {
      return true;
    } else {
      this._route.navigate(['/signin']);
      return false;
    }
  }
}
