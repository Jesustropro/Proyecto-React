import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const click = (operacion) => {
    if (operacion === "añadir") {
      setCount(count + 1);
    } else if (operacion === "restar") {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column w-25">
        <div className="d-flex justify-content-around border border-info p-1 m-1">
          <button
            onClick={() => click("restar")}
            className="btn btn-outline-info"
          >
            -
          </button>
          <h4>{count}</h4>
          <button
            onClick={() => click("añadir")}
            className="btn btn-outline-info"
          >
            +
          </button>
        </div>
        <button className="btn btn-outline-info m-1 ">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
