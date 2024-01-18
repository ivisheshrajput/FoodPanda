import { createContext } from "react";

const UserContext = createContext({
    //this will act as central global object of data
    loggedInUser: "DefaultUser"
});
export default UserContext;