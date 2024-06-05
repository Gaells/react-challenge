import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from './redux/types';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.picture} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{`R$ ${product.price.toFixed(2)}`}</p>
          <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
