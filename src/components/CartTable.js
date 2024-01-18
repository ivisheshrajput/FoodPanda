import { IMG_CDN } from "../utils/config";
const CartTable = ({ tableContent }) => {
    return (
        <div className="flex justify-between    " >

            <div>
                <h1>{tableContent.name}</h1>
                <div className="w-16  h-16   ">
                    <img src={IMG_CDN + tableContent.imageId} alt="Dish Pic" />
                </div>
            </div>
            <div className="text-sm ">₹ {tableContent.price ? tableContent.defaultPrice / 100 : tableContent.price / 100}
            </div>

        </div>
    )
}
export default CartTable;