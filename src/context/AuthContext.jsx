import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
export const AuthContext = React.createContext({});

function AuthContextProvider({children}) {

    const navigate = useNavigate();
    const [isAuth, toggleIsAuth] = useState(false);

    function logIn(e) {
        e.preventDefault();
        toggleIsAuth(true);
        console.log("Gebruiker is ingelogd!");
        navigate("/profile");
    }

    function logOut(e) {
        e.preventDefault();
        toggleIsAuth(false);
        console.log("Gebruiker is uitgelogd!");
        navigate("/")
    }

    const data = {
        isAuth,
        logInHandler: logIn,
        logOutHandler: logOut,
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;