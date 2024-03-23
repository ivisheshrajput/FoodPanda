import React, { useState } from "react";
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RestaurantCategory = ({ restaurantCategories, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCategory = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mx-auto w-8/12 my-4 p-5  bg-[#940b0b] bg-gradient-to-tr  from-black rounded-md   shadow-lg  ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleCategory}
      >
        <span className="ml-4  text-base  text-white font-semibold tracking-widest">
          {restaurantCategories?.title} (
          {restaurantCategories?.itemCards.length})
        </span>
        <span className="mr-4">
          {isExpanded ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          )}
        </span>
      </div>

      {isExpanded && (
        <div>
          {restaurantCategories?.itemCards.map((categoryMenu) => (
            <RestaurantCategoryMenu
              categoryMenu={categoryMenu.card?.info}
              key={categoryMenu.card?.info?.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default RestaurantCategory;
