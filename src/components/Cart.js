import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartCard from "./CartCart";
const Cart = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  const { cart, cartTotal, vaciarCarrito } = useContext(CartContext);

  return cart.length > 0 ? (
    <>
      <div className="d-flex flex-column flex-wrap align-content-center">
        <h1 className="d-flex justify-content-center">Resumen de compra</h1>
        {cart.map((producto) => (
          <CartCard producto={producto} key={producto.id}></CartCard>
        ))}

        <h4 className="d-flex justify-content-start">
          Precio Total: {cartTotal()}$
        </h4>
        <Link to="/checkout" className="btn btn-outline-info m-1">
          Terminar mi compra
        </Link>

        <button className="btn btn-outline-info m-1" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>

        <button
          className="btn btn-outline-info m-1 mb-5"
          type="button"
          onClick={handleNavigate}
        >
          Atras
        </button>
      </div>
    </>
  ) : (
    <>
      <h1
        className="
    d-flex justify-content-center m-5 text-center"
      >
        No hay productos en el carrito!
      </h1>
      <div
        className="
    d-flex justify-content-center m-5 "
      >
        <Link to="/" className="btn btn-outline-info m-1" type="button">
          Añadir productos
        </Link>
      </div>
    </>
  );
};
export default Cart;
