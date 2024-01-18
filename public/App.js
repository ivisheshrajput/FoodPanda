import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//import styles from "./styles.css";
import Header from "../src/components/Heading";
import Body from "../src/components/Body.js";
import Footer from "../src/components/Footer";
import About from "../src/components/About.js";
import Contact from "../src/components/Contact.js";
import Error from "../src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "../src/components/RestaurantMenu";
import Shimmer from "../src/components/Shimmer";
import Cart from "../src/components/Cart.js";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore.js";
import UserContext from "../src/utils/UserContext.js";
//import Instamart from "../src/components/Instamart";


// "build": "npx parcel public/index.html --dist-dir ./build",
// "deploy": "gh-pages -d build"

const Instamart = lazy(() => import("../src/components/Instamart"));
const App = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Vishesh",
        };
        setUserName(data.name)
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }} >
                <div className=" min-h-screen flex flex-col " >
                    <UserContext.Provider value={{ loggedInUser: userName }} >
                        <Header className="flex flex-col min-h-screen" />
                    </UserContext.Provider>
                    <Outlet className="flex flex-col min-h-screen" />
                    <Footer className=" mt-auto   " />
                </div >
            </UserContext.Provider>

        </Provider >)

}
const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
                // element: <Suspense fallback={<h1>Loading.....</h1>}><Instamart /></Suspense>
                //Fallback is used for the time by between which it takes to load things
                //Suspense tag is compulsory to load the lazy component
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
