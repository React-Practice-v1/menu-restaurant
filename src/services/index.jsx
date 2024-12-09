import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

export const listCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories.php`);
    // console.log(response.data.categories[0]);
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const filterCategories = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/filter.php`, {
      params: {
        c: category,
      },
    });
    // console.log(response.data.meals);
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
