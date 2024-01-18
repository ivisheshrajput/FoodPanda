// import React from "react";


// const Footer = () => (


//     <div className="bg-red-700  ">
//         <ul className="bg-orange-100  flex justify-evenly" >
//             <li className="text-amber-900 mt-2">Contact Us
//                 <div >
//                     <h4 className="text-gray-500">Food Panda</h4>
//                     <h6 className="text-gray-500">© 2023 <br /> P.R. Enterprises</h6>
//                 </div>
//             </li>
//             <li className="text-amber-900 mt-2">We Deliver To:
//                 <ul className="text-gray-500">
//                     <li>Pune</li>
//                     <li>Delhi</li>
//                     <li>Mumbai</li>
//                     <li>Banglore</li>
//                     <li>Kanpur</li>
//                 </ul>
//             </li>
//             <li className="text-amber-900 mt-2">Legal
//                 <h4 className="text-gray-500">Terms & Conditions</h4>
//                 <h4 className="text-gray-500">Cookie Policy</h4>
//             </li>
//             <li className="text-amber-900 mt-2">Follow Us
//                 <h4 className="text-gray-500">Instagram</h4>
//                 <h4 className="text-gray-500">Facebook</h4>
//                 <h4 className="text-gray-500">Thread</h4>
//                 <h4 className="text-gray-500">Google</h4>
//             </li>

//         </ul>
//         <h4 className=" flex justify-evenly  text-white">@ 2023 Copyright by Vishesh Rajput</h4>
//     </div>

// )

// export default Footer;

import React from "react";
import Logo from "../utils/FoodPanda-Logo.png";


const Footer = () => (


    <>
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img className="w-36 h-16 object-contain" src={Logo} alt="Logo of Food App" />
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Food Delivery Website</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">WE DELIVER TO</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Delhi</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Kanpur</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Pune</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Banglore</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-orange-100 ">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 P.R.ENTERPRISES —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@VISHESH RAJPUT</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>

    </>

)

export default Footer;