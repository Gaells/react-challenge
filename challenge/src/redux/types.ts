export interface Product {
  id: string;
  title: string;
  price: number;
  picture: string;
  description: string;
  memory: string;
  brand: string;
  chipType: string;
  quantity: number;
}

export interface CartItem extends Product {
  quantityInCart: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: string; // Product ID
}

interface UpdateCartItemQuantityAction {
  type: typeof UPDATE_CART_ITEM_QUANTITY;
  payload: {
    id: string; // Product ID
    quantity: number;
  };
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartItemQuantityAction;
