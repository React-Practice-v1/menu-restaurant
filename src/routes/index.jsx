import { Route, Routes } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import DishPage from "../pages/DishPage";
import RecipesPage from "../pages/RecipesPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RecipesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dish/:dishId" element={<DishPage />} />
    </Routes>
  );
}

export default AppRoutes;
