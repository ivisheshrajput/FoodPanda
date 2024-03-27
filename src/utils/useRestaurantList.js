import { useState, useEffect } from "react";
import { API_Restaurant_List } from "./config";
import { toast } from "react-hot-toast";

const useRestaurantList = () => {
  const [restaurantName, setRestaurantName] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      // const fetchList = await fetch(API_Restaurant_List);
      const fetchList = await fetch(
        "https://proxy.cors.sh/" + API_Restaurant_List,
        {
          headers: {
            "x-cors-api-key": "temp_c4f211b09a1a3fa56a71a382d9fc7e90",
          },
        }
      );

      const json = await fetchList.json();
      setRestaurantName(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // setRestaurantName(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
    } catch (err) {
      toast.error("Data is not Fetched");
    }
  }
  return restaurantName;
};
export default useRestaurantList;
