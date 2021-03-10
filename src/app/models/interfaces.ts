import { ProductsState } from "../state/reducers/products.reducer";

export interface ITopic {
  id?: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface IProduct {
  id?: string;
  title: string;
  summary?: string;
  description: string;
  imageUrl?: string;
  price: number;
}

export interface IProductPayload {
  id?: string;
  title: string;
  quantity: number;
  price: number;
}
