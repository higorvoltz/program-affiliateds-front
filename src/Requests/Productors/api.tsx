import axios from 'axios';

interface Productor {
  id: number;
  name: string;
  email: string;
  balance: number;
}

export async function getProductors(): Promise<Productor[]> {
  const baseUrl = 'http://localhost:3001/';
  try {
    const response = await axios.get<Productor[]>(`${baseUrl}api/v1/productors`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
