import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../reducers/products.reducer';

export const getProductsState = createFeatureSelector<ProductsState>('data');

export const getItemCount = createSelector(
  getProductsState,
  (state): number => {
    if (state == null) {
      return 0;
    }
    return state.products.length;
  }
);

export const getCartItems = createSelector(
  getProductsState,
  (state) => {
    if (state == null) {
      return 0;
    }
    return state.products.map(item => {
      return {
        itemName: item.title,
        price: item.price,
        qty: item.quantity,
        totalPrice: item.quantity * item.price,
      };
    });
  }
);

