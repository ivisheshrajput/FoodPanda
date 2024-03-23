import { useSelector } from "react-redux";
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";
import CartTable from "./CartTable";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = cartItems.reduce((acc, cartItem) => {
    return (
      acc +
      (cartItem.categoryMenu.price
        ? cartItem.categoryMenu.defaultPrice / 100
        : cartItem.categoryMenu.price / 100)
    );
  }, 0);

  return (
    <div className="h-screen   ">
      <h1 className="flex justify-center text-xl font-finger-paint font-bold  mt-24 mb-4">
        Order Summary
      </h1>
      <table className="table-auto flex flex-col w-10/12 mx-auto">
        <thead className=" items-center bg-[#940b0b] bg-gradient-to-tr  from-black  p-3 rounded-md">
          <tr className="flex justify-around text-white">
            <th>Items</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className=" items-center rounded-md mt-4">
          {cartItems.map((cartItem) => (
            <CartTable tableContent={cartItem.categoryMenu} />
          ))}
        </tbody>
      </table>
      <div className="items-center bg-[#940b0b] bg-gradient-to-tr  from-black  p-3 rounded-md w-10/12 mx-auto">
        <div className="flex justify-around text-white font-semibold ">
          <div>Total</div>
          <div>₹ {total}</div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
