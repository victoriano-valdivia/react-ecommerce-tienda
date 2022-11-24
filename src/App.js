import "./sass/styles.scss";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer";
import CardProduct from "./components/CardProduct";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer
        greeting={"bienvenido al mundo de la moda las mejores marca para hombres y mujeres "}
      />
    </div>
  );
}

export default App;

