import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DishPage from "../pages/DishPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dish/:dishId" element={<DishPage />} />
    </Routes>
  );
}

export default AppRoutes;
