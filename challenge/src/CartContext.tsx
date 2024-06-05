import React, { createContext, useContext, useState } from 'react';
import { Product } from './redux/types';

interface CartContextType {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantityInCart: quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
