import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./ItemList";
import productos from "../datos/productos";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  function promise() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(productos), 2000);
    });
  }
  useEffect(() => {
    setLoading(true);
    promise()
      .then((data) => {
        if (categoriaId) {
          setItems(
            data.filter((productos) => productos.categoria === categoriaId)
          );
        } else {
          setItems(data);
        }
      })
      .then(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  return loading ? (
    <>
      <h1 className=" d-flex justify-content-center">Cargando...</h1>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">TopPC</p>

          <ul className="content__container__list">
            <li className="content__container__list__item">Bienvenidos!</li>
            <li className="content__container__list__item">lo mas TOP!</li>
            <li className="content__container__list__item">Teclados !</li>
            <li className="content__container__list__item">Cpus!</li>
          </ul>
        </div>
      </div>
    </>
  ) : (
    <div>
      <h1 className=" d-flex justify-content-center p-2">
        Primera Entrega del Proyecto Final- Jesus Mora
      </h1>
      <ItemList items={items} />;
    </div>
  );
};
export default ItemListContainer;
