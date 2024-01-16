import React, {useState} from "react";
export const AuthContext = React.createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);

    const data = {
        isAuth,
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;