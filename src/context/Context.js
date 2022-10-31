import { createContext, useEffect, useState } from "react"
export const Context = createContext()
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        checkAuthentication()

    }, [])
    const checkAuthentication = () => {
        const token = JSON.parse(localStorage.getItem("token"))
        if (!token) {
            setIsAuthenticated(false)
            window.location.href = "/login"

        }
        else{
            setIsAuthenticated(true)    
        }
    }
    return (

        <Context.Provider value={{ user, setUser,isAuthenticated }}>
            {children}
        </Context.Provider>
    )
}
