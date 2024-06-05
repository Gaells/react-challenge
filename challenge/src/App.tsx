import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from './redux/types';

const App: React.FC = () => {
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
      <h1>Lista de Produtos</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.picture} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{`R$ ${product.price.toFixed(2)}`}</p>
            <button onClick={() => console.log('Product added to cart:', product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
