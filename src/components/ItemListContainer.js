import React from "react";
const itemListContainer = ({ contenido, children }) => {
  return (
    <>
      <div>
        <h1>{contenido}</h1>
      </div>
      {children}
    </>
  );
};
export default itemListContainer;
