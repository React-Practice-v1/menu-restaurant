import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dishesById } from "../services";
import { Spin } from "antd";
import DishDetail from "../components/DishDetail";

const DishPage = () => {
  const { dishId } = useParams();
  const [dishDetail, setDishDetail] = useState(null);

  useEffect(() => {
    const fetchDishDetails = async () => {
      try {
        const data = await dishesById(dishId);
        setDishDetail(data);
      } catch (error) {
        console.error("Error fetching dish details:", error);
      }
    };
    fetchDishDetails();
  }, [dishId]);

  if (!dishDetail) {
    return <Spin />;
  }

  return (
    <>
      <DishDetail dishDetail={dishDetail} />
    </>
  );
};

export default DishPage;
