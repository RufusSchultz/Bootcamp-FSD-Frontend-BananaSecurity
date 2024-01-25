import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export const AuthContext = React.createContext({});

function AuthContextProvider({children}) {

    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
    });

    async function logIn(token) {

        localStorage.setItem("token", token);
        const decoded = jwtDecode(token);
        console.log(decoded);
        const endpoint = `http://localhost:3000/600/users/${decoded.sub}`

        try {
            const response = await axios.get(endpoint, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })

            setAuth({
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
            });
            console.log("Gebruiker is ingelogd!");
            navigate("/profile");
            console.log(response);
        } catch (e) {
            console.error(e);
            // logOut();
        }

    }

    function logOut(e) {
        e.preventDefault();
        setAuth({isAuth: false, user: ""});
        console.log("Gebruiker is uitgelogd!");
        navigate("/")
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        logInHandler: logIn,
        logOutHandler: logOut,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;