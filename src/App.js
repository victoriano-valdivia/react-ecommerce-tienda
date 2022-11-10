import logo from './logo.svg';
import './App.css';
import ItemLisContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <ItemLisContainer greeting={"hola mundo"} />
      </main>
   
    </div>
  );
}

export default App;
