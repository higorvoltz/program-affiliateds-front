import axios from 'axios';
import { SaleItem } from '../../Interfaces';

const baseUrl = 'http://localhost:3001/api/v1/';

export async function getSaleItems(): Promise<SaleItem[]> {
  try {
    const response = await axios.get<SaleItem[]>(`${baseUrl}saleitems`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getSaleItemById(id: number): Promise<SaleItem | null> {
  try {
    const response = await axios.get<SaleItem>(`${baseUrl}saleitems/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addSaleItem(saleItem: SaleItem): Promise<void> {
  try {
    await axios.post(`${baseUrl}saleitems`, saleItem);
  } catch (error) {
    console.log(error);
  }
}

export async function updateSaleItemById(id: number, saleItem: SaleItem): Promise<void> {
  try {
    await axios.put(`${baseUrl}saleitems/${id}`, saleItem);
  } catch (error) {
    console.log(error);
  }
}