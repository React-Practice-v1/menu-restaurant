import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dishesById } from "../services";

const DishPage = () => {
  const { dishId } = useParams();
  const [dishDetail, setDishDetail] = useState(null);

  useEffect(() => {
    const fetchDishDetails = async () => {
      try {
        const data = await dishesById(dishId);
        console.log(data);
        setDishDetail(data);
      } catch (error) {
        console.error("Error fetching dish details:", error);
      }
    };
    fetchDishDetails();
  }, [dishId]);

  if (!dishDetail) return <div>Cargando...</div>;

  // Extraer los ingredientes y las cantidades
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (dishDetail[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: dishDetail[`strIngredient${i}`],
        measure: dishDetail[`strMeasure${i}`],
      });
    }
  }

  return (
    <>
      <h3>{dishDetail.strMeal}</h3>
      <img src={dishDetail.strMealThumb} alt={dishDetail.strMeal} />
      <p>{dishDetail.strInstructions}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>
      {dishDetail.strYoutube && (
        <a href={dishDetail.strYoutube} target="_blank" rel="noopener noreferrer">
          Ver en YouTube
        </a>
      )}
    </>
  );
};

export default DishPage;
