import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CardDishes = ({ dishesCategories, handleCardDishes }) => {
  const navigate = useNavigate();

  const handleDishId = (id) => {
    handleCardDishes(id);
    // navigate("/dish");
    navigate(`/dish/${id}`);
  };

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
        {Array.isArray(dishesCategories) ? (
          dishesCategories.map((dish) => (
            <Card
              key={dish.idMeal}
              hoverable
              style={{ width: 240 }}
              cover={<img alt={dish.strMeal} src={dish.strMealThumb} />}
            >
              <Meta title={dish.strMeal} description="Más detalles" onClick={() => handleDishId(dish.idMeal)} />
            </Card>
          ))
        ) : (
          <p>No hay platos</p>
        )}
      </div>
    </>
  );
};

export default CardDishes;
