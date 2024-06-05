import React from 'react';
import { Product } from './redux/types';

interface CartItemProps {
  item: Product;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div>
      <img src={item.picture} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{`R$ ${item.price.toFixed(2)}`}</p>
      <button onClick={() => onUpdateQuantity(item.quantity - 1)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onUpdateQuantity(item.quantity + 1)}>+</button>
      <button onClick={onRemove}>Remover</button>
    </div>
  );
};

export default CartItem;
