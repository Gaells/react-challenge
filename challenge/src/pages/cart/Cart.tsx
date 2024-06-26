import React, { useContext } from "react";
import { ShopContext, ShopContextType } from "../../context/shop-context";
import { PRODUCTS } from "../../Products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart: React.FC = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext) as ShopContextType;
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
