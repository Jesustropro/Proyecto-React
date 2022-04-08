import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
const ItemDetailCointainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const itemRef = doc(db, "productos", itemId);
    console.log(itemRef);
    getDoc(itemRef)
      .then((doc) => {
        const prod = { id: doc.id, ...doc.data() };

        setItem(prod);
      })
      .finally(setLoading(false));
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
      <h1 className=" d-flex justify-content-center">{item.titulo}</h1>
      <ItemDetail {...item} />
    </div>
  );
};
export default ItemDetailCointainer;
