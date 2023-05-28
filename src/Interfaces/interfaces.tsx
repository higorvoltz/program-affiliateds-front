export interface Productor {
  id: number;
  name: string;
  email: string;
  balance: number;
}

export interface ProductorsState {
  productors: Productor[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  comission_value: number;
  productor_id: number;
}

export interface ProductsState {
  products: Product[];
}