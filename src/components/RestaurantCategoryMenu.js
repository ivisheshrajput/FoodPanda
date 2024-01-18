import React from "react";
import { IMG_CDN } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantCategoryMenu = ({ categoryMenu }) => {

    const dispatch = useDispatch();

    const handleClickToAdd = ({ categoryMenu }) => {

        dispatch(addItem({ categoryMenu }))
    }
    console.log("From RestaurantCategoryMenu ", { categoryMenu });
    return (
        <div className="p-2  border-b-2 flex justify-between">
            <div className="w-10/12">
                <div className="text-xs " >{categoryMenu.itemAttribute.vegClassifier === "NONVEG" ? "🍗" : "🌱"}</div>
                <span className="text-base " >{categoryMenu?.name}</span>
                <div className="text-xs " >₹{categoryMenu.price ? categoryMenu.defaultPrice / 100 : categoryMenu.defaultPrice / 100}</div>
                <span className="text-xs " >{categoryMenu?.description}</span>
            </div>
            <div className="w-2/12 h-auto   ">
                <img src={IMG_CDN + categoryMenu.imageId} alt="Dish Pic" />
                <button className="pl-2 pr-2   text-white bg-red-600  rounded-md " onClick={() => handleClickToAdd({ categoryMenu })}>Add +</button>
            </div>
        </div>
    )


    //Way if we want to make use map here instead of Restaurant Category
    // return (
    //     <div>
    //         {categoryMenu.map((categoryItem) => (
    //             <div key={categoryItem.card?.info?.id} className="p-2 border-b-2 flex justify-between">
    //                 <div className="w-10/12">
    //                     <div className="text-xs">{categoryItem.card?.info?.itemAttribute.vegClassifier === "NONVEG" ? "🍗" : "🌱"}</div>
    //                     <span className="text-base">{categoryItem.card?.info?.name}</span>
    //                     <div className="text-xs">₹{categoryItem.card?.info?.price ? categoryItem.card?.info?.defaultPrice / 100 : categoryItem.card?.info?.defaultPrice / 100}</div>
    //                     <span className="text-xs">{categoryItem.card?.info?.description}</span>
    //                 </div>
    //                 <div className="w-2/12 h-auto">
    //                     <img src={IMG_CDN + categoryItem.card?.info?.imageId} alt="Dish Pic" />
    //                     <button className="pl-2 pr-2 text-white bg-red-600 rounded-md" onClick={() => handleClickToAdd(categoryItem.card?.info)}>Add +</button>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // )







}
export default RestaurantCategoryMenu;