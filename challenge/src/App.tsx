import React, { useState } from 'react';
import { CartProvider, useCart } from './CartContext';
import CartScreen from './components/CartScreen';
import ProductList from './ProductList';
import { Product } from './redux/types';

const App: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <CartProvider>
  <div>
    <h1>Minha Loja</h1>
    <button onClick={() => setShowCart(!showCart)}>
      {showCart ? 'Voltar para a loja' : 'Ver Carrinho'}
    </button>
    {showCart ? <CartScreen /> : <ProductList onAddToCart={handleAddToCart} />}
  </div>
</CartProvider>

  );
};

export default App;
