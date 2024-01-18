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
}

export default useRestaurantMenu;

// const getMenu = async () => {
//     try {
//         const dataMenu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6371746&lng=77.2756181&restaurantId=" + id);
//         const jsonMenu = await dataMenu.json();


//         setMenuItem(jsonMenu.data);
//     } catch (err) {
//         alert("Dish is not Fetched")
//     }
//     return menuItem;
// }