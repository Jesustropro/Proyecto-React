import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
const CartCard = ({ producto }) => {
  const { vaciarProducto, cart, setCart } = useContext(CartContext);

  const updateCantidadProduct = (e, productoId) => {
    const cantidad = e.target.value;

    if (parseInt(cantidad) <= producto.stock) {
      producto.cantidad = parseInt(cantidad);
      setCart([...cart]);

      localStorage.setItem("carrito", JSON.stringify([...cart]));
    } else if (parseInt(cantidad) > producto.stock) {
      Swal.fire({
        toast: true,
        position: "top-end",
        width: 400,
        icon: "error",
        title: `Solo hay ${producto.stock} ${producto.titulo} disponibles`,
        background: "#0f202798 ",
        color: "#716add",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div
      className="card mb-2 border-info "
      style={{ maxWidth: "440px", backgroundColor: "transparent" }}
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

            <select
              className="btn btn-outline-info m-1"
              defaultValue={producto.cantidad}
              onChange={(e) => updateCantidadProduct(e, producto.id)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
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
};
export default CartCard;
