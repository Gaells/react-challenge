import React from 'react';
import { useCart } from '../CartContext';
import CartItem from '../CartItem';

const CartScreen: React.FC = () => {
  const { items, removeFromCart, updateCartItemQuantity } = useCart();
  console.log('Itens do carrinho:', items);
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={() => removeFromCart(item.id)}
          onUpdateQuantity={(quantity: number) => updateCartItemQuantity(item.id, quantity)}
        />
      ))}
    </div>
  );
};

export default CartScreen;
