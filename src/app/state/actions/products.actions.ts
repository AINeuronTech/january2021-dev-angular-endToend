import { Action } from '@ngrx/store';
import { IProductPayload } from 'src/app/models/interfaces';


export enum ProductActionTypes {
  ADD_PRODUCT = '[Product] Add Product Success',
  DELETE_PRODUCT = '[Product] Delete Product',
}

export class AddProductAction implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT;
  constructor(public payload: IProductPayload) {}
}


export class DeleteProductAction implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT;
  constructor(public payload: number) {}
}

export type ProductAction = AddProductAction | DeleteProductAction
