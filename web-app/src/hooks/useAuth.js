import axios from "axios";
import React, { useEffect } from "react"

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


export const useAuth = (component) => {  
    
    if (localStorage.getItem("token")) {
        return component
    }
    return <Login />


}

export const useLoggedIn = (component) => {
    if (localStorage.getItem("token")) {
        return <Home />
    }
    return component
}


export const useSessionID = (id) => {

    useEffect(()=>{
        const session = axios.get('/api/auth/get_session_id').json()
        sessionStorage.setItem("session", session);
        return true
    }, [id])

}
