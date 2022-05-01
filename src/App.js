import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetailCointainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrusel from "./components/Carrusel";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/inicio" element={<Carrusel />} />
          <Route
            path="/TodosLosProductos"
            element={<ItemListContainer />}
          ></Route>
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:itemId" element={<ItemDetailCointainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </CartProvider>
  );
}

export default App;
