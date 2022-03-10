import "./App.css";
import Navegation from "./components/Navbar";
import ItemsContainer from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
      {" "}
      <Navegation />
      <ItemsContainer />
    </div>
  );
}

export default App;
