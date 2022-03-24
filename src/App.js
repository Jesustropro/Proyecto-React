import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
import ItemDetailCointainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailCointainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
