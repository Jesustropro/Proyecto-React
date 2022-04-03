import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito, cart } = useContext(CartContext);
  return (
    <Link to="/cart">
      <button className="btn btn-outline-info">
        <img
          alt=""
          src="/images/imgCart.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {cart.length > 0 ? (
          <span className="m-1">{cantidadEnCarrito()}</span>
        ) : null}
      </button>
    </Link>
  );
};
export default CartWidget;
