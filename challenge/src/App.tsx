import React, { useEffect, useState } from 'react';
import { fetchProducts } from './productApi';

const App: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.picture} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Preço: R${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
