import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from '../models/interfaces';
import { AddProductAction } from '../state/actions/products.actions';
import { ProductsState } from '../state/reducers/products.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  panelOpenState = false;
  currentCounter = 0;
  constructor(private store: Store<ProductsState>) {}

  ngOnInit(): void {}

  increment() {
    this.currentCounter++;
  }

  decrement() {
    this.currentCounter--;
  }

  addToCart(product: IProduct) {
    this.store.dispatch(new AddProductAction({title: product.title, quantity: this.currentCounter, price: product.price}));
  }
}
