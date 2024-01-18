import React from "react";

// const Switch = (veg) => {
//     const [isSelected, setIsSelected] = useState(veg);
//     return (
//         <div className={`flex w-10 h-5 m-10 border border-solid border-black  rounded-full ${isSelected ? 'bg-green-600' : 'bg-white-600'}`}
//             onClick={() => setIsSelected(!isSelected)}
//         >
//             <span className={`h-5 w-5 bg-white rounded-full border border-solid border-black transition-all duration-200  ${isSelected ? 'ml-5' : 'ml-0'} `} />
//         </div>

//     )

// }



{/* <div className={`relative w-10 h-5 m-10 rounded-full bg-white border border-solid border-black ${veg ? 'bg-green-600' : 'bg-white'}`} onClick={onToggle}> */ }



const Switch = (veg, onToggle) => {

    return (
        // <div className="relative w-10 h-5 m-10 rounded-full bg-white border border-solid border-black" onClick={onToggle}>
        <div className={` w-10 h-5 m-10 rounded-full shadow-sm    border-solid border-black ${veg ? 'bg-slate-400 ' : 'bg-green-600'}`} onClick={onToggle}>
            <span
                className={`block w-5 h-5 rounded-full bg-white border border-solid border-black transform transition-transform duration-200 ${veg ? 'translate-x-0' : 'translate-x-full'}`}
            />
        </div>

    )

}
export default Switch;




// Explaination of passing regular argument and object in a functional component


// const useRestaurantMenu = (id) => {}
// In this approach, you're passing the id as a regular argument to the functional component. It means that when you call this component, you pass the id directly, like this:

// jsx
// Copy code
// useRestaurantMenu(123); // Here, 123 is the value of id
// Inside the component, you can access id as a regular parameter, like so:

// jsx
// Copy code
// const useRestaurantMenu = (id) => {
//   // You can directly use the 'id' here
//   console.log(id);
// };
// This is a straightforward and common way of passing a single value to a functional component.

// const useRestaurantMenu = ({ id }) => {}
// In this approach, you're passing an object with a destructured property as the argument to the functional component. When you call the component, you pass an object with the property id like this:

// jsx
// Copy code
// useRestaurantMenu({ id: 123 }); // Here, { id: 123 } is the object passed
// Inside the component, you need to destructure the id property from the object parameter, like so:

// jsx
// Copy code
// const useRestaurantMenu = ({ id }) => {
//   // You need to destructure 'id' from the object
//   console.log(id);
// };