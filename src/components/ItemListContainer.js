import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const productosCategory = query(
      productosRef,
      where("categoria", "==", categoriaId)
    );

    getDocs(productosCategory)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(items);
      })
      .finally(setLoading(false));
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
        Desafio clase 9 - Jesus Mora
      </h1>
      <ItemList items={items} />;
    </div>
  );
};
export default ItemListContainer;
