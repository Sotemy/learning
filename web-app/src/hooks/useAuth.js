import axios from "axios";
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


export const useAuth = (component) => {  
    
    if (sessionStorage.getItem("id")) {
        return component
    }
    return <Login />


}

export const useLoggedIn = (component) => {
    if (sessionStorage.getItem("id")) {
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
