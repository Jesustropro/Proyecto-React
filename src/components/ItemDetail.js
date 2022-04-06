import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, img, descripcion, precio, stock, titulo }) => {
  const { addProducto, noDuplicado } = useContext(CartContext);

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
      id,
    };
    setCantidad(1);
    addProducto(añadirItem, cantidad);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img alt="" src={img} style={{ width: "18rem" }} />
        <p>{descripcion}</p>
        <h6>Precio: {precio}$</h6>
        <h6>Disponibles: {stock}</h6>
        {stock === 0 && (
          <h6 className="aviso">{`Oh! No tenemos ningún ${titulo} Disponible :(`}</h6>
        )}
        {stock < 10 && stock > 0 && (
          <h6 className="aviso">Ultimas unidades Disponibles!</h6>
        )}
        {stock > 0 && (
          <ItemCount
            stock={stock}
            añadir={añadirAlCarrito}
            count={cantidad}
            setCount={setCantidad}
          />
        )}

        {!noDuplicado(id) ? (
          <></>
        ) : (
          <>
            <Link to="/cart" className="btn btn-outline-info m-1">
              Terminar compra
            </Link>
          </>
        )}
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
