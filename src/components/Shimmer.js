import React from "react";

function Shimmer() {
    return (
        <div className="grid grid-cols-4 grid-rows gap-y-6 justify-items-center">

            {Array(20).fill("").map((item, index) => <div className="  p-3 w-[300px] h-[350px] border-2  rounded-2xl bg-gray-500   hover:bg-orange-100  shadow-lg " key={index}></div>)}

        </div>
    )


};

export default Shimmer;
