import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProducto = (producto) => {
    setCart([...cart, producto]);
  };

  const noDuplicado = (id) => {
    return cart.find((producto) => producto.id === id);
  };

  const cantidadEnCarrito = () => {
    return cart.reduce(
      (acumulador, producto) => (acumulador += producto.cantidad),
      0
    );
  };
  const cartTotal = () => {
    return cart.reduce(
      (acumulador, producto) =>
        (acumulador += producto.precio * producto.cantidad),
      0
    );
  };
  const vaciarCarrito = () => {
    setCart([]);
  };

  const vaciarProducto = (id) => {
    setCart(cart.filter((producto) => producto.id !== id));
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addProducto,
        noDuplicado,
        cantidadEnCarrito,
        cartTotal,
        vaciarCarrito,
        vaciarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
