// redux/reducers/cartReducer.ts

import { CartState, CartActionTypes, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from '../types';

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === existingItem.id
              ? { ...item, quantityInCart: item.quantityInCart + 1 }
              : item
          ),
          total: state.total + newItem.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...newItem, quantityInCart: 1 }],
          total: state.total + newItem.price,
        };
      }

    case REMOVE_FROM_CART:
      const removedItem = state.items.find(item => item.id === action.payload);
      if (removedItem) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          total: state.total - removedItem.price * removedItem.quantityInCart,
        };
      } else {
        return state;
      }

    case UPDATE_CART_ITEM_QUANTITY:
      const { id, quantity } = action.payload;
      const updatedItem = state.items.find(item => item.id === id);
      if (updatedItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === id ? { ...item, quantityInCart: quantity } : item
          ),
          total: state.total + (quantity - updatedItem.quantityInCart) * updatedItem.price,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default cartReducer;
