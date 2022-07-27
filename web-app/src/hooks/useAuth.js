import React from "react"
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


export const useAuth = (initialState = false, component) => {  

    if (initialState === false) {
        return <Login />
    }
    return component


}

export const useLoggedIn = (initialState = false, component) => {
    if (initialState === true) {
        return <Home />
    }
    return component
}
