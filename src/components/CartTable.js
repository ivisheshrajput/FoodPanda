import { IMG_CDN } from "../utils/config";
const CartTable = ({ tableContent }) => {
  return (
    <tr className="flex justify-between  mb-4">
      <td className="flex space-x-10">
        <img
          src={IMG_CDN + tableContent.imageId}
          alt="Dish Pic"
          className="w-10 h-10"
        />

        <div>{tableContent.name}</div>
      </td>
      <td className="text-sm flex md:mx-72  ">
        ₹{" "}
        {tableContent.price
          ? tableContent.defaultPrice / 100
          : tableContent.price / 100}
      </td>
    </tr>
  );
};
export default CartTable;
