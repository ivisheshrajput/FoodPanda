import { useSelector } from "react-redux";
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";
import CartTable from "./CartTable";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    const total = cartItems.reduce((acc, cartItem) => {
        // Assuming each cartItem has a 'price' property
        return acc + (cartItem.categoryMenu.price ? cartItem.categoryMenu.defaultPrice / 100 : cartItem.categoryMenu.price / 100);
    }, 0);

    return (
        <>
            <h1 className="flex justify-center text-lg font-bold ">Order Summary</h1>
            <div className=" mx-auto flex justify-around bg-red-600  text-white shadow-md  w-6/12">
                <div>
                    Items
                </div>
                <div>
                    Price
                </div>
            </div>
            <div className="mx-auto w-6/12 my-4 p-4  bg-orange-50  flex justify-between   shadow-lg  ">

                <div>
                    {cartItems.map((cartItem) => (<CartTable tableContent={cartItem.categoryMenu} />))}
                </div>
            </div>
            <div className=" mx-auto flex justify-around bg-red-600  text-white shadow-md  w-6/12">
                <div>
                    Total
                </div>
                <div>
                    ₹ {total}
                </div>
            </div>
        </>

    )
}
export default Cart;

{/**/ }