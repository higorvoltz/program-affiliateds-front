import axios from 'axios';
import { Product } from '../../Interfaces/interfaces';

const baseUrl = 'http://localhost:3001/api/v1/';

export async function getProducts(): Promise<Product[]>{
  try {
    const response = await axios.get<Product[]>(`${baseUrl}products`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const response = await axios.get<Product>(`${baseUrl}productors${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addProduct(product: Product): Promise<void> {
  try {
    await axios.post(`${baseUrl}products`, product);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProductById(id: number, product: Product): Promise<void> {
  try {
    await axios.put(`${baseUrl}productors/${id}`, product);
  } catch (error) {
    console.log(error);
  }
}