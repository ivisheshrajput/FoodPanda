import React from "react";
import { IMG_CDN } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { GiBroccoli, GiMeat } from "react-icons/gi";
const RestaurantCategoryMenu = ({ categoryMenu }) => {
  const dispatch = useDispatch();

  const handleClickToAdd = ({ categoryMenu }) => {
    dispatch(addItem({ categoryMenu }));
  };
  return (
    <div className="p-2  border-b-2 flex justify-between text-white">
      <div className="w-11/12">
        <div className="text-xs flex space-x-3 mt-2 ">
          {categoryMenu.itemAttribute.vegClassifier === "NONVEG" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="20"
              height="20"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 3387 3387"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <style type="text/css">
                  {`
            .str0 {stroke:#9C3B14;stroke-width:85}
            .fil0 {fill:#FEFEFE}
            .fil1 {fill:#9C3B14}
          `}
                </style>
              </defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <rect
                  className="fil0 str0"
                  x="338"
                  y="320"
                  width="2739"
                  height="2773"
                />
                <circle className="fil1 str0" cx="1707" cy="1733" r="789" />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="20"
              height="20"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 3387 3387"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <style type="text/css">
                  {`
            .str0 {stroke:#008001;stroke-width:85}
            .fil0 {fill:#FEFEFE}
            .fil1 {fill:#008001}
          `}
                </style>
              </defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <rect
                  className="fil0 str0"
                  x="338"
                  y="320"
                  width="2739"
                  height="2773"
                />
                <circle className="fil1 str0" cx="1707" cy="1733" r="789" />
              </g>
            </svg>
          )}

          <div className="text-base ">{categoryMenu?.name}</div>
        </div>

        <span className="text-xs ">{categoryMenu?.description}</span>
        <div className="text-xs ">
          ₹
          {categoryMenu.price
            ? categoryMenu.defaultPrice / 100
            : categoryMenu.defaultPrice / 100}
        </div>
      </div>
      <div className="w-20   h-20">
        <img
          src={IMG_CDN + categoryMenu.imageId}
          alt="Dish Pic"
          className="rounded-md"
        />
        <button
          className="px-3 py-1  text-white bg-red-700   rounded-sm   absolute -mt-6 text-xs "
          onClick={() => handleClickToAdd({ categoryMenu })}
        >
          Add +
        </button>
      </div>
    </div>
  );
};
export default RestaurantCategoryMenu;
