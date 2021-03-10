import {
  ProductActionTypes,
  ProductAction,
} from '../actions/products.actions';
import { IProductPayload } from '../../models/interfaces';
import { act } from '@ngrx/effects';

export interface AppState {
  data: ProductsState;
}

export interface ProductsState {
  products: IProductPayload[];
}

const initialState: ProductsState = {
  products: []
};

export function ProductsReducer(
  state: ProductsState = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case ProductActionTypes.DELETE_PRODUCT:
      let updatedProducts = [...state.products];
      updatedProducts.filter(product => {
       return product.title.toLowerCase().indexOf(action.payload.toLowerCase()) < 0;
      })
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
}
