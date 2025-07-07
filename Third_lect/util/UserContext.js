import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Shadman",
});

export default UserContext;