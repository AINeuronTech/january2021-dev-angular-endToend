import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent {
  items = 5;
  constructor(
    public authService: AuthenticationService,
    private _route: Router
  ) {}

  async onSignOut() {
    await this.authService.signout();
    this._route.navigate(['/']);
  }
}
