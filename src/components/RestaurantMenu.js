import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../utils/config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const menuItem = useRestaurantMenu(id);

  const [showIndex, setShowIndex] = useState(null);

  if (menuItem === null) return <Shimmer />;
  {console.log(menuItem,"xxxxxxxxxxxxxxxxx")}
  const { name, cloudinaryImageId } = menuItem?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   menuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  const categories =
    menuItem?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { cuisines, locality } = menuItem?.cards[2]?.card?.card?.info;

  return (
    <>
      <div className="flex flex-wrap w-8/12 justify-between mx-auto mt-24 pb-6    ">
        <div className=" ">
          <ul>
            <li className="text-2xl font-finger-paint ">{name} </li>
            <li className="text-xs   font-serif text-gray-500     ">
              {cuisines.join(", ")}
            </li>
            <li className="text-sm    font-light  text-gray-500     ">
              {locality}
            </li>
          </ul>
        </div>
        <img className="w-24  h-16 " src={IMG_CDN + cloudinaryImageId} />
      </div>
      <hr />

      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            restaurantCategories={category?.card?.card}
            dropCategory={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            key={category.card.card.title}
          />
        ))}
      </div>
      <hr />
    </>
  );
};
export default RestaurantMenu;
