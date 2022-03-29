import React from "react";
import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
const ItemDetail = ({ img, descripcion, precio, stock }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img alt="" src={img} style={{ width: "18rem" }} />
        <p>{descripcion}</p>
        <h6>Precio: {precio}$</h6>
        <h6>Disponibles: {stock}</h6>
        <ItemCount stock={stock} />
      </div>
    </>
  );
};
export default ItemDetail;
