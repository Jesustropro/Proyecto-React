import React, { useContext, useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  Timestamp,
  writeBatch,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { Navigate, Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import Swal from "sweetalert2";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Checkout = () => {
  const { cart, cartTotal, vaciarProducto, vaciarCarrito } =
    useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const { values, handleInputChange, resetForm } = useForm({
    nombre: "",
    email: "",
    email2: "",
    direccion: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      values.nombre !== undefined &&
      values.direccion !== undefined &&
      values.nombre.length >= 2 &&
      values.direccion.length >= 4 &&
      values.email === values.email2
    ) {
      const pedido = {
        cliente: {
          ...values,
        },
        productos: cart,
        total: cartTotal(),
        fecha: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const pedidosRef = collection(db, "pedidos");
      const productosRef = collection(db, "productos");

      const peticion = query(
        productosRef,
        where(
          documentId(),
          "in",
          cart.map((item) => item.id)
        )
      );
      const productos = await getDocs(peticion);

      const sinStock = [];

      productos.docs.forEach((doc) => {
        const productoInCart = cart.find((producto) => producto.id === doc.id);

        if (doc.data().stock >= productoInCart.cantidad) {
          batch.update(doc.ref, {
            stock: doc.data().stock - productoInCart.cantidad,
          });
          Swal.fire({
            toast: true,
            iconColor: "#0dcaf0",
            position: "top-end",
            width: 400,
            icon: "info",
            title: "Procesando",
            background: "#0f202798 ",
            color: "#0dcaf0",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
        } else {
          sinStock.push(productoInCart);
        }
      });

      if (sinStock.length === 0) {
        batch.commit().then(() => {
          addDoc(pedidosRef, pedido).then((doc) => {
            setOrderId(doc.id);
            vaciarCarrito();
          });
        });
      } else {
        vaciarProducto(sinStock[0].id);
        Swal.fire({
          toast: true,
          position: "top-end",
          width: 400,
          icon: "error",
          title: `Oh, ya no hay stock de ${sinStock[0].titulo} :(`,
          background: "#0f202798 ",
          color: "#716add",
          showConfirmButton: false,
          timer: 5000,
        });
      }
    } else if (values.email !== values.email2) {
      Swal.fire({
        toast: true,
        position: "top-end",
        width: 400,
        icon: "error",
        title: `Los email no coinciden`,
        background: "#0f202798 ",
        color: "#716add",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        toast: true,
        position: "top-end",
        width: 400,
        icon: "error",
        title: `Los campos estan incorrectos`,
        background: "#0f202798 ",
        color: "#716add",
        showConfirmButton: false,
        timer: 2000,
      });

      resetForm();
    }
  };

  if (orderId) {
    return (
      <>
        <div className="container ">
          <h1 className=" d-flex justify-content-center mt-4 mb-4 text-center">
            Tu pedido se ha realizado exitosamente
          </h1>
          <h3 className="d-flex justify-content-center">
            Tu N° de pedido es: {orderId}
          </h3>
          <div className="d-flex justify-content-center mt-4 text-center">
            <Link
              to="/inicio"
              className="btn btn-outline-info m-2"
              type="button"
            >
              Volver al inicio
            </Link>
            <CopyToClipboard text={orderId}>
              <button
                className="btn btn-outline-info m-2"
                onClick={() => {
                  Swal.fire({
                    toast: true,
                    iconColor: "#0dcaf0",
                    position: "top-end",
                    width: 400,
                    icon: "success",
                    title: "Copiado exitosamente ",
                    background: "#0f202798 ",
                    color: "#0dcaf0",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }}
              >
                Copiar N°
              </button>
            </CopyToClipboard>
          </div>
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
            placeholder="Escriba su nombre (minimo 2 letras)"
            value={values.nombre}
            onChange={handleInputChange}
            name="nombre"
            autoComplete="off"
            required={"required"}
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
            required={"required"}
          />
        </div>
        <div className="form-group m-2">
          <label>Repita el email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Escriba su email"
            value={values.email2}
            onChange={handleInputChange}
            name="email2"
            autoComplete="off"
            required={"required"}
          />
        </div>
        <div className="form-group m-2">
          <label>Dirección</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escriba su dirección (minimo 4 letras)"
            value={values.direccion}
            onChange={handleInputChange}
            name="direccion"
            autoComplete="off"
            required={"required"}
          />
        </div>

        <button type="submit" className="btn btn-outline-info m-2">
          Enviar
        </button>
      </form>
    </>
  );
};
export default Checkout;
