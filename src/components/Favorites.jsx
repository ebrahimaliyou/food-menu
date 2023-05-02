import { useGlobalContext } from "../context";
import "../App.css";

const Favorites = () => {
  const { Meals, favoriteMeals } = useGlobalContext();

  return (
    <div className="container-fluid">
      {favoriteMeals.length === 0 ? (
        <h1
          className="text-center"
          style={{
            color: "white",
            justifyContent: "center",
          }}
        >
          No Favorite Meals
        </h1>
      ) : (
        favoriteMeals.map((meal) => (
          <div className="fav" key={meal.idMeal}>
            <img className="fav-meal-img" src={meal.strMealThumb} alt="..." />
            <h5 className="fav-meal-name">{meal.strMeal}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
