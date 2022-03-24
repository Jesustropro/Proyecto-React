import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import productos from "../datos/productos";
import ItemDetail from "./ItemDetail";
const ItemDetailCointainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const itemId = useParams();

  function getItem() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(productos), 2000);
    });
  }
  useEffect(() => {
    getItem()
      .then((data) => {
        setItem(
          data.find((productos) => productos.id === Number(itemId.itemId))
        );
      })
      .then(() => {
        setLoading(false);
      });
  }, [itemId]);
  return loading ? (
    <>
      <h1 className=" d-flex justify-content-center">Cargando...</h1>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">TopPC</p>

          <ul className="content__container__list">
            <li className="content__container__list__item">Pantallas!</li>
            <li className="content__container__list__item">Mouses!</li>
            <li className="content__container__list__item">Teclados!</li>
            <li className="content__container__list__item">Bocinas!</li>
          </ul>
        </div>
      </div>
    </>
  ) : (
    <div>
      <h1 className=" d-flex justify-content-center">
        Detalle del Producto {itemId.itemId}
      </h1>
      <ItemDetail {...item} />
    </div>
  );
};
export default ItemDetailCointainer;
