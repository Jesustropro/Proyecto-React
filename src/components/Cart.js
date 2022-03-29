import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Carrito</h1>
      <button className="btn btn-outline-info m-1">Comprar</button>
      <button
        className="btn btn-outline-info m-1"
        type="button"
        onClick={handleNavigate}
      >
        Atras
      </button>
    </div>
  );
};
export default Cart;
