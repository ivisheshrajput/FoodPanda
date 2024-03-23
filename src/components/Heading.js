import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Logo from "../utils/LogoWhite.png";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [loginToggle, setLoginToggle] = useState("Login");
  const onlineStatus2 = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-black  shadow-2xl  fixed w-full bg-gradient-to-l from-[#940b0b]  z-50    ">
      <div>
        <Link to="/">
          <img
            className="w-48 h-20  object-contain ml-8"
            src={Logo}
            alt="Logo of Food App"
          />{" "}
        </Link>
      </div>

      <div className="items-center text-white">
        <ul className="flex m-4 space-x-14 text-md   ">
          <li className=" tracking-widest hover:font-semibold  ">
            <Link to="/">HOME </Link>
          </li>
          <li className="tracking-widest hover:font-semibold ">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="tracking-widest hover:font-semibold  ">
            <Link to="/contact">HELP</Link>
          </li>
          <li className="tracking-widest hover:font-semibold ">
            <Link to="/instamart">GROCERY</Link>
          </li>
          <li className="pr-8 tracking-widest">
            <Link to="/cart" className="flex space-x-2">
              <FaShoppingCart size={24} />
              {cartItems.length ? (
                <span>{cartItems.length}</span>
              ) : (
                <span></span>
              )}
            </Link>{" "}
          </li>
        </ul>
      </div>
      {/* <div className="items-baseline  ">
        <button
          className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-600 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2     "
          onClick={() => {
            loginToggle === "Login"
              ? setLoginToggle("Logout")
              : setLoginToggle("Login");
          }}
        >
          {loginToggle}
        </button>

        <h6 className="">
          Online Status:{onlineStatus2 === true ? "🟢" : "🔴"}
        </h6>
      </div> */}
    </div>
  );
};

export default Header;
