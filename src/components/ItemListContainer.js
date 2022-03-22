import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./ItemList";
import Productos from "./productos/productos";
const ItemListContainer = () => {
  function promise() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(Productos), 2000);
    });
  }
  const [items, setItems] = useState([]);
  useEffect(() => {
    promise().then((data) => setItems(data));
  });

  return <ItemList items={items} />;
};
export default ItemListContainer;
