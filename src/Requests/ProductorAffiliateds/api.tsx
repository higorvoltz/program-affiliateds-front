import axios from 'axios';
import { ProductorAffiliated } from '../../Interfaces';

const baseUrl = 'http://localhost:3001/api/v1/';

export async function getProductorAffiliateds(): Promise<ProductorAffiliated[]> {
  try {
    const response = await axios.get<ProductorAffiliated[]>(`${baseUrl}productoraffiliateds`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductorAffiliatedById(id: number): Promise<ProductorAffiliated | null> {
  try {
    const response = await axios.get<ProductorAffiliated>(`${baseUrl}productoraffiliateds/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addProductorAffiliated(productorAffiliated: ProductorAffiliated): Promise<void> {
  try {
    await axios.post(`${baseUrl}productoraffiliateds`, productorAffiliated);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProductorAffiliatedById(id: number, productorAffiliated: ProductorAffiliated): Promise<void> {
  try {
    await axios.put(`${baseUrl}productoraffiliateds/${id}`, productorAffiliated);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProductorAffiliated(id: number): Promise<void> {
  try {
    await axios.delete(`${baseUrl}productoraffiliateds/${id}`);
  } catch (error) {
    console.log(error);
  }
}