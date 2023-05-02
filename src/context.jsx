import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext(); // create an context method

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const fetchMealsByName = async (name) => {
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

const fetchMeals = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

const fetchMealById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return data.meals[0];
  } catch (error) {
    console.log(error);
  }
};

const fetchRandomMeal = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data.meals[0];
  } catch (error) {
    console.log(error);
  }
};
const meals = await fetchMeals(allMealsUrl);

const AppProvider = ({ children }) => {
  const localFavoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals"));
  const [Meals, setMeals] = useState([]);
  const [favoriteMeals, setFavorite] = useState(localFavoriteMeals); // --> [{meal1}, {meal2}]
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalMeal , setModalMeal] = useState({});

  // modal state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (mealId) => {
    const meal = Meals.find((meal) => parseInt(meal.idMeal) === parseInt(mealId));
    setModalMeal(meal);
    setShow(true);
  };

  useEffect(() => {
    setMeals(meals);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals));
  }, [favoriteMeals]);

  const handleLikeButton = async (event) => {
    const mealId = parseInt(event.currentTarget.value);

    for (const i in favoriteMeals) {
      if (parseInt(favoriteMeals[i].idMeal) === mealId) {
        const newfavoriteMeals = favoriteMeals.filter(
          (meal) => parseInt(meal.idMeal) !== mealId
        );
        setFavorite(newfavoriteMeals);
        return;
      } else {
        continue;
      }
    }

    const meal = await fetchMealById(mealId); // object type
    setFavorite((current) => [...current, meal]);
  };

  const handleSurpriseMeBtn = async () => {
    const meal = await fetchRandomMeal(randomMealUrl);
    setMeals([meal]);
  };

  const handleSearchBtn = () => {
    setMeals(searchResults);
    setSearchResults([]);
  };

  const handleInputChange = async (event) => {
    if (event.target.value === "") {
      setSearchResults([]);
      return;
    }
    const value = event.target.value;
    setSearchTerm(value);

    // Perform search and update searchResults state
    const meals = await fetchMealsByName(value);
    setSearchResults(meals);
  };

  const handleSelectResult = (mealId) => {
    const result = searchResults.find(
      (meal) => parseInt(meal.idMeal) === parseInt(mealId)
    );
    setSearchTerm(result);
    setSearchResults([]);
    setMeals([result]);
  };

  return (
    <AppContext.Provider
      value={{
        show,
        Meals,
        favoriteMeals,
        searchResults,
        modalMeal,
        handleClose,
        handleShow,
        handleInputChange,
        handleSelectResult,
        handleLikeButton,
        handleSurpriseMeBtn,
        handleSearchBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// using custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

//  children : special pprop , refers to entire application component
export { AppContext, AppProvider };
