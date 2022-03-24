import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ItemDetail = ({ titulo, img, descripcion, precio, stock }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img src={img} style={{ width: "18rem" }} />
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <h6>Precio: {precio}$</h6>
        <h6>Disponibles: {stock}</h6>
        <button className="custom-btn btn-12" type="button">
          <span>Aquí</span>
          <span>Añadir</span>
        </button>
      </div>
    </>
  );
};
export default ItemDetail;
