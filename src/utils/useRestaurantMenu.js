import { useState, useEffect } from "react";
import { API_Restaurant_MENU } from "./config";

const useRestaurantMenu = (id) => {
  const [menuItem, setMenuItem] = useState(null);
  useEffect(() => {
    getMenu();
  }, []);
  const getMenu = async () => {
    //const dataMenu = await fetch(API_Restaurant_MENU + id);
    const dataMenu = await fetch(
      "https://proxy.cors.sh/" + API_Restaurant_MENU + id,
      {
        headers: {
          "x-cors-api-key": "temp_3bbecc3d5f1da1788f137bfcb6c1d484",
        },
      }
    );
    const jsonMenu = await dataMenu.json();

    setMenuItem(jsonMenu.data);
  };
  return menuItem;
};

export default useRestaurantMenu;
