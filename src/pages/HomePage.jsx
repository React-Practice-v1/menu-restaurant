import { useEffect, useState } from "react";
import { Card, Select, Spin } from "antd";
import { filterCategories, listCategories } from "../services";

const { Option } = Select;
const { Meta } = Card;

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [dishesCategories, setDishesCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getListCategories = async () => {
      const data = await listCategories();
      setCategories(data);
      setLoading(false);
    };
    getListCategories();
  }, []);

  const handleChange = async (value) => {
    console.log("Valor seleccionado:", value);
    const data = await filterCategories(value);
    setDishesCategories(data);
    // console.log(data);
  };

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
        onChange={handleChange}
      >
        {categories.map((category) => (
          <Option key={category.idCategory} value={category.strCategory}>
            {category.strCategory}
          </Option>
        ))}
      </Select>

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
            <Meta title={dish.strMeal} description="Más detalles" />
          </Card>
        ))}
      </div>
    </>
  );
};

export default HomePage;
