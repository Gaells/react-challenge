import React, { useContext } from "react";
import { ShopContext, ShopContextType } from "../../context/shop-context";

interface ProductProps {
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
  };
}

export const Product: React.FC<ProductProps> = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext) as ShopContextType;

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
