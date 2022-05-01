import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito, cart } = useContext(CartContext);
  return (
    <button className="btn btn-outline-info">
      <img
        alt=""
        src="/images/imgCart.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {cart.length > 0 && <span className="m-1">{cantidadEnCarrito()}</span>}
    </button>
  );
};
export default CartWidget;
