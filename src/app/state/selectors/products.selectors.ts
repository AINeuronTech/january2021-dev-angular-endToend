import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductPayload } from 'src/app/models/interfaces';
import { ProductsState } from '../reducers/products.reducer';

//export const getProductsState = createSelector(
//  (state: ProductsState) => state.products
//);

export const getProductsState = createFeatureSelector<ProductsState>('data');

export const getItemCount = createSelector(
  getProductsState,
  (state): number => {
    debugger
    if (state == null) {
      return 0;
    }
    return state.products.length;
  }
);
