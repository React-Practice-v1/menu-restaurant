import { useEffect, useState } from "react";
import { filterCategories, listCategories } from "../services";

const useMenu = () => {
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

  const handleChangeCategories = async (value) => {
    // console.log("Valor seleccionado:", value);
    const data = await filterCategories(value);
    setDishesCategories(data);
  };

  const handleCardDishes = (id) => {
    console.log("gaaaaaaaaaaaaaaaa:", id);
  };

  return { categories, dishesCategories, loading, handleChangeCategories, handleCardDishes };
};

export default useMenu;
