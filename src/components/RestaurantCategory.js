import React, { useState } from "react";
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";
const RestaurantCategory = ({ restaurantCategories, dropCategory, setShowIndex }) => {

    //const [dropCategory, setDropCategory] = useState(false);

    const categoryItem = restaurantCategories?.itemCards;
    //console.log(categoryItem);

    const handleClick = () => {
        //  setDropCategory(!dropCategory)
        setShowIndex();
    }


    return (
        <div className="mx-auto w-6/12 my-4 p-4   bg-orange-50   shadow-lg  " onClick={handleClick}>
            <div className="flex justify-between ">
                <span className="ml-4  text-base font-bold  ">{restaurantCategories?.title} ({restaurantCategories?.itemCards.length}) </span>
                <span className="mr-4">▽</span>
            </div>

            {dropCategory && <div>{categoryItem.map((categoryMenu) => (<RestaurantCategoryMenu categoryMenu={categoryMenu.card?.info} key={categoryMenu.card?.info?.id} />))}</div>}


            {/* //Way if we want to make use map here instead of Restaurant Category
            <RestaurantCategoryMenu categoryMenu={categoryItem} /> */}
        </div>
    )

}
export default RestaurantCategory;