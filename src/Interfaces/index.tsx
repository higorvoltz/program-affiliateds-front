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

export interface Affiliated {
  id: number;
  name: string;
  email: string;
  balance: number;
  productor_id: number;
  password_digest: string;
}

export interface AffiliatedsState {
  affiliateds: Affiliated[];
}

export interface Client {
  id: number;
  name: string;
  email: string;
  password_digest: string;
}

export interface ClientsState {
  Clients: Client[];
}

export interface SaleItem {
  id: number;
  quantity: number;
  product_id: number;
}

export interface SaleItemsState {
  saleItems: SaleItem[];
}

export interface ProductorAffiliated {
  id: number;
  productor_id: number;
  affiliated_id: number;
}

export interface ProductorAffiliatedsState {
  productorAffiliateds: ProductorAffiliated[];
}

export interface ProductRanking {
  id: number;
  ranking: number;
  client_id: number;
  product_id: number;
}