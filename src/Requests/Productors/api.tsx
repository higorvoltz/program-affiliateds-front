import axios from 'axios';
import { Productor } from '../../Interfaces';

const baseUrl = 'http://localhost:3001/api/v1/';


export async function getProductors(): Promise<Productor[]> {
  try {
    const response = await axios.get<Productor[]>(`${baseUrl}productors`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductorsById(id: number): Promise<Productor | null> {
  try {
    const response = await axios.get<Productor>(`${baseUrl}productors${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;}
}

export async function addProductor(productor: Productor): Promise<void> {
  try {
    await axios.post(`${baseUrl}productors`, productor);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProductorById(id: number, productor: Productor): Promise<void> {
  try {
    await axios.put(`${baseUrl}productors/${id}`, productor);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProductor(id: number): Promise<void> {
  try {
    await axios.delete(`${baseUrl}productors/${id}`);
  } catch (error) {
    console.log(error);
  }
}