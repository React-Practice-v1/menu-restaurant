import { useEffect, useState } from "react";
import { dishesById, filterCategories, listCategoriesSelect } from "../services";

const useMenu = () => {
  const [categories, setCategories] = useState([]);
  const [dishesCategories, setDishesCategories] = useState([]);
  const [dishDetails, setDishDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getlistCategoriesSelect = async () => {
      const data = await listCategoriesSelect();
      setCategories(data);
      setLoading(false);
    };
    getlistCategoriesSelect();
  }, []);

  const handleChangeCategories = async (value) => {
    try {
      const data = await filterCategories(value);
      setDishesCategories(data);
    } catch (error) {
      console.log("err", error);
    }
  };

  const handleCardDishes = async (id) => {
    try {
      const data = await dishesById(id);
      setDishDetails(data);
      console.log(data);
    } catch (error) {
      console.log("err", error);
    }
  };

  return { categories, dishesCategories, dishDetails, loading, handleChangeCategories, handleCardDishes };
};

export default useMenu;
