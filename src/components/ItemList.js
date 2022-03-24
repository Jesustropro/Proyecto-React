import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="responsive m-4 gap-1">
      {items.map((item) => (
        <Item className="contain" key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemList;
