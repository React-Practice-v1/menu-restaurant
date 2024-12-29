const DishDetail = ({ dishDetail }) => {
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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <h2>{dishDetail.strMeal}</h2>
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

export default DishDetail;
