//NOT WORKING SOME ISSUE


import { useState, useEffect } from "react";
import { API_Restaurant_List } from "./config";

const useRestaurantList = () => {
    const [restaurantName, setRestaurantName] = useState([]);

    useEffect(() => {
        //can put the async function here as well

        getRestaurant();
    }, []);

    async function getRestaurant() {
        try {
            const fetchList = await fetch(API_Restaurant_List);
            const json = await fetchList.json();
            //setRestaurantName(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurantName(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


        } catch (err) {
            alert("Data is not Fetched")
        }
    }
    return restaurantName;
}
export default useRestaurantList;