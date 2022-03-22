import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="d-flex justify-content-center m-2 gap-3">
      {items.map((item) => (
        <Item key={item.titulo} item={item} />
      ))}
    </div>
  );
};
export default ItemList;
