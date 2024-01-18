import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Logo from "../utils/FoodPanda-Logo.png";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";

//npx parcel public/index.html
// const logAuthentication = () => {
//     return true;
// }


const Header = () => {
    const [loginToggle, setLoginToggle] = useState("Login");
    const onlineStatus2 = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    const { loggedInUser } = useContext(UserContext);


    return (<div className="flex justify-between bg-orange-100  shadow-lg     ">
        <img className="w-36 h-16 object-contain ml-3   " src={Logo} alt="Logo of Food App" />
        <div className="items-center">
            <ul className="flex m-4  ">
                <li className="px-3 hover:text-lg "><Link to="/">Home </Link></li>
                <li className="px-3 hover:text-lg "><Link to="/about">About</Link></li>
                <li className="px-3 hover:text-lg "><Link to="/contact">Help</Link></li>
                <li className="px-3 hover:text-lg"><Link to="/instamart">Instamart</Link></li>
                <li className="px-3 hover:text-lg "><Link to="/cart">Cart{cartItems.length}</Link> </li>
                <li className="px-3 hover:text-lg font-bold ">{loggedInUser}</li>


                {/* {loginToggle ? <button onClick={() => setLoginToggle(false)}>Login</button> : <button onClick={() => setLoginToggle(true)}>LogOut</button>} */}
            </ul>

        </div>
        <div className="items-baseline  ">
            <button className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-600 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2     " onClick={() => { loginToggle === "Login" ? setLoginToggle("Logout") : setLoginToggle("Login") }}>{loginToggle}</button>

            <h6 className="">Online Status:{onlineStatus2 === true ? "🟢" : "🔴"}</h6>

        </div>

        {/* {(logAuthentication() === true) ? <button>Login</button> : <button>LogOut</button>} */}

    </div >)
};

export default Header;