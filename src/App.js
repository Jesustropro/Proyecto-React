import "./App.css";
import Navegation from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
function App() {
  return (
    <div className="App">
      {" "}
      <Navegation />
      <ItemListContainer contenido={"Desafio clase 4 - Jesus Mora"} />{" "}
      <ItemListContainer contenido={<ItemCount />} />
    </div>
  );
}

export default App;
