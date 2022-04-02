import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  const { cart, cartTotal, vaciarCarrito, vaciarProducto } =
    useContext(CartContext);

  return (
    <>
      <div className="d-flex justify-content-center flex-column flex-wrap align-content-center">
        <h1>Resumen de compra</h1>
        {cart.map((producto) => {
          return (
            <div
              key={producto.id}
              className="card mb-2 border-info "
              style={{ width: "440px", backgroundColor: "transparent" }}
            >
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src={producto.img}
                    className="img-fluid rounded-start p-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text">Precio c/u: {producto.precio}$</p>
                    <p className="card-text">Cantidad: {producto.cantidad}</p>
                    <p className="card-text">
                      Precio: {producto.precio * producto.cantidad}$
                    </p>
                    <button
                      className="btn btn-outline-info m-1"
                      onClick={() => vaciarProducto(producto.id)}
                    >
                      Quitar producto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <h4>Precio Total: {cartTotal()}$</h4>
        <button className="btn btn-outline-info m-1">Comprar</button>

        <button className="btn btn-outline-info m-1" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>

        <button
          className="btn btn-outline-info m-1"
          type="button"
          onClick={handleNavigate}
        >
          Atras
        </button>
      </div>
    </>
  );
};
export default Cart;
