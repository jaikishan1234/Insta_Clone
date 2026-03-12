// this is state layer for auth, it will provide user and loading state to the rest of the app, and also provide functions to login and register

import { createContext, useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    
    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }} >
            {children}
        </AuthContext.Provider>
    )

}