import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Modal from "./components/Modal";
import Meals from "./components/Meals";
import Favorites from "./components/Favorites";

function App() {

  
  return (
    <main>
      <Search />
      <Favorites />
      <Meals />
      {/* <Modal /> */}
    </main>
  );
}

export default App;
