import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const noDuplicado = (id) => {
    return cart.find((producto) => producto.id === id);
  };

  const addProducto = (producto, cantidad) => {
    const productoEncontrado = noDuplicado(producto.id);
    if (productoEncontrado) {
      productoEncontrado.cantidad += cantidad;
      producto.cantidad = cantidad;
      setCart([...cart]);
    } else {
      producto.cantidad = cantidad;
      setCart([...cart, producto]);
    }
  };

  const cantidadEnCarrito = () => {
    return cart.reduce(
      (acumulador, producto) => (acumulador += producto.cantidad),
      0
    );
  };

  const vaciarCarrito = () => {
    setCart([]);
  };
  const cartTotal = () => {
    return cart.reduce(
      (acumulador, producto) =>
        (acumulador += producto.precio * producto.cantidad),
      0
    );
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
