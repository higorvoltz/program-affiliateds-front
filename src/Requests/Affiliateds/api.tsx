import axios from 'axios';
import { Affiliated } from '../../Interfaces';

const baseUrl = 'http://localhost:3001/api/v1/';

export async function getAffiliateds(): Promise<Affiliated[]> {
  try {
    const response = await axios.get<Affiliated[]>(`${baseUrl}affiliateds`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getAffiliatedById(id: number): Promise<Affiliated | null> {
  try {
    const response = await axios.get<Affiliated>(`${baseUrl}affiliateds/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addAffiliated(affiliated: Affiliated): Promise<void> {
  try {
    await axios.post(`${baseUrl}affiliateds`, affiliated);
  } catch (error) {
    console.log(error);
  }
}

export async function updateAffiliatedById(id: number, affiliated: Affiliated): Promise<void> {
  try {
    await axios.put(`${baseUrl}affiliateds/${id}`, affiliated);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAffiliated(id: number): Promise<void> {
  try {
    await axios.delete(`${baseUrl}affiliateds/${id}`);
  } catch (error) {
    console.log(error);
  }
}
