import { useGlobalContext } from "../context";
import "../App.css";
import { ArrowRight, Camera, ThumbUpOffAlt, ThumbUp } from "@mui/icons-material";

const Meals = () => {
  const {Meals, favoriteMeals, handleLikeButton, handleShow}= useGlobalContext();
  /**
   * idMeal: "52959"
   * strMeal: "Apple & Blackberry Crumble"
   * strMealThumb: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
   */
  return (
    <div className="meals">
      <div className="row">
        {Meals.map((meal) => (
          <div className="col" key={meal.idMeal}>
            <div className="card" onClick={() =>handleShow(meal.idMeal)}>
              <img src={meal.strMealThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <button type="button" className="btn" id="like-btn" value={meal.idMeal} onClick={handleLikeButton}>
                  {
                    favoriteMeals.some((favoriteMeal) => parseInt(favoriteMeal.idMeal) === parseInt(meal.idMeal)) ? <ThumbUp /> : <ThumbUpOffAlt />
                  }
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
