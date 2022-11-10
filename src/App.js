import React from "react";
import Itemlistcontainer from "./components/ItemlistContainer";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Itemlistcontainer greeting="Hola Gente" />
    </>
  );
}

export default App;