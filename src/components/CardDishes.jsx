import { Card } from "antd";
const { Meta } = Card;

export const CardDishes = ({ dishesCategories, handleCardDishes }) => {
  console.log(dishesCategories);
  return (
    <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {dishesCategories.map((dish) => (
          <Card
            key={dish.idMeal}
            hoverable
            style={{ width: 240 }}
            cover={<img alt={dish.strMeal} src={dish.strMealThumb} />}
          >
            <Meta title={dish.strMeal} description="Más detalles" onClick={() => handleCardDishes(dish.idMeal)} />
          </Card>
        ))}
      </div>
    </>
  );
};
