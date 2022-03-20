import "./App.css";
import Navegation from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
function App() {
  return (
    <div className="App">
      <Navegation />
      <ItemListContainer contenido={"Desafio clase 5 - Jesus Mora"}>
        <ItemCount stock={6} />
        <ItemList />
      </ItemListContainer>
    </div>
  );
}

export default App;
