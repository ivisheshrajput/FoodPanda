import React from "react";
import { IMG_CDN } from "../utils/config";
import { FaStar } from "react-icons/fa";

const CardBox = ({ resData }) => {
  const { name, cloudinaryImageId, locality, cuisines, avgRating, areaName } =
    resData.info;

  const { slaString } = resData?.info?.sla;
  return (
    <div className="w-[250px] h-[250px] ">
      <img
        className="w-60  h-36 rounded-md hover:w-56   hover:h-32    "
        src={IMG_CDN + cloudinaryImageId}
        alt="Images of Restaurant"
      />
      <h3 className="text-md font-bold ">{name}</h3>
      <h4 className="text-sm ">
        {locality} {areaName}
      </h4>
      <h5 className="text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-min    ">
        {cuisines.join(", ")}
      </h5>
      <div className="text-xs flex space-x-3">
        <span className="flex ">
          <FaStar size={13} /> {avgRating}
        </span>
        <span>{slaString}</span>
      </div>
    </div>
  );
};

export const HigherOrderFunctionForOffer = () => {
  return (props) => {
    return (
      <div>
        <label className=" rounded-lg bg-green-600 px-2 absolute text-white text-xs  ">
          Promoted
        </label>
        <CardBox {...props} />
      </div>
    );
  };
};

export default CardBox;
