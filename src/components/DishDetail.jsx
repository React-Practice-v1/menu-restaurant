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
      <div className="flex gap-10 m-10">
        <div className="w-1/2">
          <img className="w-full" src={dishDetail.strMealThumb} alt={dishDetail.strMeal} />
        </div>

        <div className="w-1/2">
          <h1 className="text-3xl font-bold"> {dishDetail.strMeal} </h1>
          <p className="mt-2">{dishDetail.strInstructions}</p>
          <h4 className="mt-4">Ingredientes:</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {dishDetail.strYoutube && (
        <a href={dishDetail.strYoutube} target="_blank" rel="noopener noreferrer">
          Ver en YouTube
        </a>
      )}
    </>
  );
};

export default DishDetail;
