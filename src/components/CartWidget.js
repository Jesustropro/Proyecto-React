import React from "react";
import imgCart from "../images/imgCart.png";
const cartImg = () => {
  return (
    <button className="btn btn-outline-info">
      <img
        alt=""
        src={imgCart}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{" "}
    </button>
  );
};
export default cartImg;
