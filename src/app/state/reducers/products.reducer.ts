import {
  ProductActionTypes,
  ProductAction,
} from '../actions/products.actions';
import { IProductPayload } from '../../models/interfaces';

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
      updatedProducts.splice(action.payload, 1);
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
}
