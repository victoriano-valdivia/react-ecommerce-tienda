import React from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;