import { createContext, useContext, useState } from "react"

const mockUsers = [
    {email: 'coder@house.com', pass: '123456'},
    {email: 'coderhouse@gmail.com', pass: 'coderhouse'},
    {email: 'react@coder.com', pass: 'react123'},
]

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        loggedIn: true,
        userId: "coder@house.com"
    })

    const [error, setError] = useState({})

    const login = (values) => {
        const {email, password} = values
        
        setError({})

        const match = mockUsers.find((user) => user.email === email)

        if (match) {
            if (match.pass === password) {
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else {
                setError({
                    password: "Password incorrecto"
                })
            }
        } else {
            setError({
                email: "Usuario no encontrado"
            })
        }

    }

    const logout = () => {
        setAuth({
            loggedIn: false,
            userId: null
        })
    }


    return (
        <AuthContext.Provider value={{auth, error, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}