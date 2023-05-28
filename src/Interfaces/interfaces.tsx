export interface Productor {
  id: number;
  name: string;
  email: string;
  balance: number;
}

export interface ProductorsState {
  productors: Productor[];
}