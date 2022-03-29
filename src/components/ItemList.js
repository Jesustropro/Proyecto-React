import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="responsive m-3 gap-3 ">
      {items.map((item) => {
        return <Item key={item.id} className="contain" item={item} />;
      })}
    </div>
  );
};
export default ItemList;
