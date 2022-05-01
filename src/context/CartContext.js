import { createContext } from "react";
import { useState, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const noDuplicado = (id) => {
    return cart.find((producto) => producto.id === id);
  };
  const productInLocal = () => {
    if (JSON.parse(localStorage.getItem("carrito")) !== null) {
      const cartInStorage = JSON.parse(localStorage.getItem("carrito"));
      setCart([...cartInStorage]);
    }
  };
  useEffect(() => {
    if (cart.length === 0) {
      productInLocal();
    }
  }, []);

  const addProducto = (producto, cantidad) => {
    const productoEncontrado = noDuplicado(producto.id);

    if (productoEncontrado) {
      productoEncontrado.cantidad += cantidad;
      producto.cantidad = cantidad;
      setCart([...cart]);
      localStorage.setItem("carrito", JSON.stringify([...cart]));
    } else {
      producto.cantidad = cantidad;
      setCart([...cart, producto]);
      localStorage.setItem("carrito", JSON.stringify([...cart, producto]));
    }
  };
  const cantidadEnCarrito = () => {
    return cart.reduce(
      (acumulador, producto) => (acumulador += producto.cantidad),
      0
    );
  };

  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
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
    const cartLocal = JSON.parse(localStorage.getItem("carrito"));
    const newCartLocal = cartLocal.filter((prod) => prod.id !== id);
    localStorage.setItem("carrito", JSON.stringify(newCartLocal));
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
        productInLocal,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
