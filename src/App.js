import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetailCointainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrusel from "./components/Carrusel";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/inicio" element={<Carrusel />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:itemId" element={<ItemDetailCointainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
