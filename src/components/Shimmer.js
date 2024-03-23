import React from "react";

function Shimmer() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows gap-y-6 justify-items-center mt-24  mb-10">
        {Array(20)
          .fill("")
          .map((item, index) => (
            <div
              className="w-[250px] h-[250px] bg-gray-300 rounded-md "
              key={index}
            ></div>
          ))}
      </div>
    </>
  );
}

export default Shimmer;
