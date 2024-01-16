
const AuthContext = React.createContext({});

function AuthContextProvider({children}) {

    const data = {
        soort: "VR",
        spel: "Golf",
        leuk: true,
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;