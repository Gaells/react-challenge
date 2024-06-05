import axios from 'axios';

interface Product {
  id: string;
  title: string;
  price: number;
  picture: string;
  description: string;
  memory: string;
  brand: string;
  chipType: string;
  quantity: number;
}

const apiUrl = 'http://localhost:3000/products';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
