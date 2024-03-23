import { useState, useEffect } from "react";
import { API_Restaurant_MENU } from "./config";

const useRestaurantMenu = (id) => {
  const [menuItem, setMenuItem] = useState(null);
  useEffect(() => {
    getMenu();
  }, []);
  const getMenu = async () => {
    const dataMenu = await fetch(API_Restaurant_MENU + id);
    const jsonMenu = await dataMenu.json();

    setMenuItem(jsonMenu.data);
  };
  return menuItem;
};

export default useRestaurantMenu;
