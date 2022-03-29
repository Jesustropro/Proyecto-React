import React, { useState } from "react";
import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ img, descripcion, precio, stock, titulo }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  const [cantidad, setCantidad] = useState(1);

  const añadirAlCarrito = () => {
    const añadirItem = {
      titulo,
      precio,
      cantidad,
      img,
    };
    console.table(añadirItem);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img alt="" src={img} style={{ width: "18rem" }} />
        <p>{descripcion}</p>
        <h6>Precio: {precio}$</h6>
        <h6>Disponibles: {stock}</h6>
        <ItemCount
          stock={stock}
          añadir={añadirAlCarrito}
          count={cantidad}
          setCount={setCantidad}
        />

        <button
          className="custom-btn btn-12 m-3"
          type="button"
          onClick={handleNavigate}
        >
          <span>Atras</span>
          <span>Volver</span>
        </button>
      </div>
    </>
  );
};
export default ItemDetail;
