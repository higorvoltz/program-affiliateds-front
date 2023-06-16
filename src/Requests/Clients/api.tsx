import axios from 'axios';
import { Client } from '../../Interfaces';

const baseUrl = 'http://localhost:3001/api/v1/';

export async function getClients(): Promise<Client[]> {
  try {
    const response = await axios.get<Client[]>(`${baseUrl}clients`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getClientById(id: number): Promise<Client | null> {
  try {
    const response = await axios.get<Client>(`${baseUrl}clients/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addClient(client: Client): Promise<void> {
  try {
    await axios.post(`${baseUrl}clients`, client);
  } catch (error) {
    console.log(error);
  }
}

export async function updateClientById(id: number, client: Client): Promise<void> {
  try {
    await axios.put(`${baseUrl}clients/${id}`, client);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClient(id: number): Promise<void> {
  try {
    await axios.delete(`${baseUrl}clients/${id}`);
  } catch (error) {
    console.log(error);
  }
}