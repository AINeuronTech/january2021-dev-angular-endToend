import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { ProductsState } from '../state/reducers/products.reducer';
import { getItemCount } from '../state/selectors/products.selectors';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  itemsCount$: any;
  constructor(
    private store: Store<ProductsState>,
    public authService: AuthenticationService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.itemsCount$ = this.store.select(getItemCount);
  }

  async onSignOut() {
    await this.authService.signout();
    this._route.navigate(['/']);
  }
}
