import axios from 'axios';
import { ProductRanking } from '../../Interfaces';

const baseUrl = 'http://localhost:3001/api/v1/';

export async function getProductRankings(): Promise<ProductRanking[]> {
  try {
    const response = await axios.get<ProductRanking[]>(`${baseUrl}productrankings`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductRankingById(id: number): Promise<ProductRanking | null> {
  try {
    const response = await axios.get<ProductRanking>(`${baseUrl}productrankings/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addProductRanking(productRanking: ProductRanking): Promise<void> {
  try {
    await axios.post(`${baseUrl}productrankings`, productRanking);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProductRankingById(id: number, productRanking: ProductRanking): Promise<void> {
  try {
    await axios.put(`${baseUrl}productrankings/${id}`, productRanking);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProductRanking(id: number): Promise<void> {
  try {
    await axios.delete(`${baseUrl}productrankings/${id}`);
  } catch (error) {
    console.log(error);
  }
}