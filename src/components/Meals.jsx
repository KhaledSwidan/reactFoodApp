import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig = {};

const Meals = () => {
  const { data: loadedMeals, error } = useHttp(
    "http://localhost:3000/meals",
    requestConfig,
    []
  );

  if (error) {
    return <Error title="Faild to fetch data" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Meals;
