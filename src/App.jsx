import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import MealModal from "./components/MealModal";
import Meals from "./components/Meals";
import Favorites from "./components/Favorites";

function App() {

  
  return (
    <main>
      <Search />
      <Favorites />
      <Meals />
      <MealModal />
    </main>
  );
}

export default App;
