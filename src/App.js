import "./App.css";
import Navegation from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
function App() {
  return (
    <div className="App">
      <Navegation />
      <h1>Desafio clase 5 - Jesus Mora</h1>
      <ItemCount stock={6} />
      <ItemListContainer>
        <ItemList />
      </ItemListContainer>
    </div>
  );
}

export default App;
