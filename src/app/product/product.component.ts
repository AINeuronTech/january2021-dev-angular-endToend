import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  panelOpenState = false;
  currentCounter = 0;
  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.currentCounter++;
  }

  decrement() {
    this.currentCounter--;
  }

  addToCart() {

  }
}
