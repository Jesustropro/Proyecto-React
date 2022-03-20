import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";
import logo from "../images/imgNav.png";
const productos = [
  {
    titulo: "pantalla",
    descripcion: "Lorem",
    precio: "4$",
    img: logo,
  },
  {
    titulo: "teclado",
    descripcion: "Lorem",
    precio: "2$",
    img: logo,
  },
  {
    titulo: "mouse",
    descripcion: "Lorem",
    precio: "3$",
    img: logo,
  },
  {
    titulo: "cpu",
    descripcion: "Lorem",
    precio: "10$",
    img: logo,
  },
];
const ItemList = () => {
  function promise() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(productos), 2000);
    });
  }

  const [item, setItem] = useState([]);
  useEffect(() => {
    promise().then((data) => setItem(data));
  });
  return (
    <div className="d-flex justify-content-center m-2 gap-3">
      {item != null
        ? item.map((elemento) => (
            <Item
              key={elemento.titulo}
              titulo={elemento.titulo}
              descripcion={elemento.descripcion}
              precio={elemento.precio}
              img={elemento.img}
            />
          ))
        : null}
    </div>
  );
};
export default ItemList;
