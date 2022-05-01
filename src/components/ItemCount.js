import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
const ItemCount = ({ id, stock, añadir, count, setCount, titulo }) => {
  const { cart } = useContext(CartContext);
  const productoInCart = cart.find((producto) => producto.id === id);

  const click = (operacion) => {
    if (operacion === "añadir") {
      if (stock > count) {
        setCount(count + 1);
      }
    } else if (operacion === "restar") {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center itemCount">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-around border border-info p-1 m-1">
          <button
            onClick={() => click("restar")}
            className="btn btn-outline-info"
            disabled={count <= 1}
          >
            -
          </button>
          <h4>{count}</h4>
          <button
            onClick={() => click("añadir")}
            className="btn btn-outline-info"
            disabled={count === stock}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-outline-info m-1"
          onClick={() => {
            if (productoInCart) {
              if (productoInCart.cantidad + count > stock) {
                Swal.fire({
                  toast: true,
                  position: "top-end",
                  width: 400,
                  icon: "error",
                  title: `Solo hay ${stock} ${titulo} disponibles`,
                  background: "#0f202798 ",
                  color: "#716add",
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
              if (productoInCart.cantidad + count <= stock && stock !== 0) {
                añadir();

                Swal.fire({
                  toast: true,
                  iconColor: "#0dcaf0",
                  position: "top-end",
                  width: 400,
                  icon: "success",
                  title: "Añadido exitosamente",
                  background: "#0f202798 ",
                  color: "#0dcaf0",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            } else if (stock !== 0) {
              añadir();
              Swal.fire({
                toast: true,
                position: "top-end",
                iconColor: "#0dcaf0",
                width: 400,
                icon: "success",
                title: "Añadido exitosamente",
                background: "#0f202798 ",
                color: "#0dcaf0",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
