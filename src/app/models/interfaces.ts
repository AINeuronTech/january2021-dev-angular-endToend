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
