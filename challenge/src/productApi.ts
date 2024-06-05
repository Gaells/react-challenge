import axios from 'axios';

// Função para buscar todos os produtos
export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/products');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};

// Função para buscar um produto específico pelo ID
export const fetchProductById = async (productId: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produto pelo ID:', error);
    return null;
  }
};
