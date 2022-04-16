import React, { useContext, useState } from "react";
import { db } from "../firebase/config";
import {
  doc,
  collection,
  addDoc,
  Timestamp,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { Navigate, Link } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal, vaciarCarrito } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const pedido = {
      cliente: {
        ...values,
      },
      productos: cart,
      total: cartTotal(),
      fecha: Timestamp.fromDate(new Date()),
    };
    const pedidosRef = collection(db, "pedidos");
    cart.forEach((producto) => {
      const docRef = doc(db, "productos", producto.id);
      getDoc(docRef).then((doc) => {
        if (doc.data().stock >= producto.cantidad) {
          updateDoc(docRef, {
            stock: doc.data().stock - producto.cantidad,
          });
          addDoc(pedidosRef, pedido).then((doc) => {
            setOrderId(doc.id);
            vaciarCarrito();
          });
        } else {
          alert("no hay stock de tu producto");
          vaciarCarrito();
        }
      });
    });
  };

  if (orderId) {
    return (
      <>
        <div className="container">
          <h1 className=" d-flex justify-content-center m-5 p-3">
            Tu Pedido se ha realizado exitosamente
          </h1>
          <h3 className="">Tu n° de pedido es: {orderId}</h3>
          <Link to="/inicio" className="btn btn-outline-info " type="button">
            Volver al inicio
          </Link>
        </div>
      </>
    );
  }
  if (cart.length === 0) {
    return <Navigate to="/cart" />;
  }
  return (
    <>
      <h1 className="d-flex justify-content-center p-2">Checkout</h1>
      <form className="container w-75" onSubmit={handleSubmit}>
        <div className="form-group m-2">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escriba su nombre"
            value={values.nombre}
            onChange={handleInputChange}
            name="nombre"
            autoComplete="off"
            required="required"
          />
        </div>
        <div className="form-group m-2">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Escriba su email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
            autoComplete="off"
            required="required"
          />
        </div>
        <div className="form-group m-2">
          <label>Dirección</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escriba su dirección"
            value={values.direccion}
            onChange={handleInputChange}
            name="direccion"
            autoComplete="off"
            required="required"
          />
        </div>

        <button type="submit" className="btn btn-outline-info m-2">
          Submit
        </button>
      </form>
    </>
  );
};
export default Checkout;
