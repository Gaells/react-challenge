import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const CartSummary: React.FC = () => {
  const { items, removeFromCart, updateCartItemQuantity } = useCart();

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    updateCartItemQuantity(productId, quantity);
  };

  return (
    <div>
      <h2>Resumo do Carrinho</h2>
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={() => removeFromCart(item.id)}
          onUpdateQuantity={quantity => handleUpdateQuantity(item.id, quantity)}
        />
      ))}
    </div>
  );
};

export default CartSummary;
