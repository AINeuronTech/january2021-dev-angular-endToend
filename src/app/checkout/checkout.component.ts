import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteProductAction } from '../state/actions/products.actions';
import { ProductsState } from '../state/reducers/products.reducer';
import { getCartItems } from '../state/selectors/products.selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  shoppingCart$: any;

  constructor(private store: Store<ProductsState>) {}

  ngOnInit(): void {
    this.shoppingCart$ = this.store.select(getCartItems);
  }

  removeItem(itemTitle: string) {
    this.store.dispatch(new DeleteProductAction(itemTitle));
  }
}
