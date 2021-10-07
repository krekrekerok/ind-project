import { React, createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut
        } from "firebase/auth"

const authContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
})

export const useAuth = () => useContext(authContext)

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return () => {
            unsub()
        }
    }, [])

    const register = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logout = () => {
        // const userEmail = JSON.stringify(currentUser.email)
        return signOut(auth)
    }

    return (
        <authContext.Provider value = {{
            currentUser,
            register,
            login,
            logout
        }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;
