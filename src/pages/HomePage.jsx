import { Select, Spin } from "antd";
import useMenu from "../hooks/useMenu";
import { CardDishes } from "../components/cardDishes";
const { Option } = Select;

const HomePage = () => {
  const { categories, dishesCategories, loading, handleChangeCategories, handleCardDishes } = useMenu();

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      <Select
        size="large"
        defaultValue=""
        style={{ width: 400 }}
        allowClear
        placeholder="Selecciona una categoria"
        onChange={handleChangeCategories}
      >
        {categories.map((category) => (
          <Option key={category.idCategory} value={category.strCategory}>
            {category.strCategory}
          </Option>
        ))}
      </Select>

      <CardDishes dishesCategories={dishesCategories} handleCardDishes={handleCardDishes} />
    </>
  );
};

export default HomePage;
