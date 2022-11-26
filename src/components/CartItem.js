import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { CartAction } from "./../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const IncrementCartItem = () => {
    dispatch(
      CartAction.addToCart({
        id,
        name,
        price,
      })
    );
  };
  const DecrementCartItem = () => {
    dispatch(CartAction.removeFromCart(id));
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={DecrementCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={IncrementCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
