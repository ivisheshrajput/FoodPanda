import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CardBox, { HigherOrderFunctionForOffer } from "./CardBox";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import Bowl from "../utils/Bowl.png";
import { Toaster } from "react-hot-toast";

const Body = () => {
  const restaurantame = useRestaurantList();
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterDataRestaurant, setFilterDataRestaurant] = useState([]);

  const OfferLabel = HigherOrderFunctionForOffer(CardBox);

  useEffect(() => {
    setAllRestaurant(restaurantame);
    setFilterDataRestaurant(restaurantame);
  }, [restaurantame]);

  function filterRestaurant(searchTextXYZ, restaurantXYZ) {
    return restaurantXYZ.filter((restaurantfil) => {
      return restaurantfil?.info?.name
        ?.toLowerCase()
        ?.toUpperCase()
        ?.includes(searchTextXYZ.toLowerCase().toUpperCase());
    });
  }

  return allRestaurant?.length === 0 ? (
    <>
      {" "}
      <Toaster />
      <Shimmer />
    </>
  ) : (
    <>
      <Toaster />
      <div className="mt-16 flex justify-between item-center bg-[#940b0b] bg-gradient-to-r from-black shadow-xl ">
        <div className="text-white mx-auto my-40 text-center">
          <div className=" text-5xl font-finger-paint   ">Super</div>
          <div className="text-3xl font-finger-paint ">
            {" "}
            <span className="text-red-700 text-5xl">Delicious</span> Menu
          </div>
          <div className="text-3xl font-finger-paint ">This Weekend Only</div>
          <div className="mt-5 p-2">
            <input
              className="border text-sm  text-black p-1 pl-3 w-7/12  rounded-l-md"
              type="text"
              placeholder="Search Restaurants "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              className="bg-red-700 text-white text-sm rounded-r-md px-8 py-[5px]"
              onClick={() => {
                const data = filterRestaurant(searchText, allRestaurant);
                setFilterDataRestaurant(data);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <img
          className="object-contain ml-8 w-1/2 h-[500px] pb-10"
          src={Bowl}
          alt="Logo of Food App"
        />
      </div>
      <div className="p-6">
        <div className="grid grid-cols-5 gap-6  ">
          {filterDataRestaurant.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
                  <OfferLabel resData={restaurant} />
                ) : (
                  <CardBox resData={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
