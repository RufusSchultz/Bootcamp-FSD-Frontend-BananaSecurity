import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
export const AuthContext = React.createContext({});

function AuthContextProvider({children}) {

    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState({isAuth: false, user: null});

    function logIn(userEmail) {
        setIsAuth({isAuth:true, user: userEmail});
        console.log("Gebruiker is ingelogd!");
        navigate("/profile");
    }

    function logOut(e) {
        e.preventDefault();
        setIsAuth({isAuth: false, user: ""});
        console.log("Gebruiker is uitgelogd!");
        navigate("/")
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
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