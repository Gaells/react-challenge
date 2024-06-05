import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface CartIconProps {
  itemCount: number;
  total: number;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount, total }) => {
  return (
    <IconButton aria-label="Carrinho">
      <Badge badgeContent={itemCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
      <span>{`Total: R$ ${total.toFixed(2)}`}</span>
    </IconButton>
  );
};

export default CartIcon;
