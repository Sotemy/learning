import axios from "axios";
import { useEffect, useState } from "react"

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const useAuth = (component = "") => {

    const [res, setRes] = useState("")

    useEffect( () => { 
        const getIt = async() => {
            const response = await axios.get('http://localhost:4000/auth/check_key', {headers: {Authorization: 'Bearer '+localStorage.getItem("token")}});
            setRes(response)
        }
        getIt()
    }, [])

    if (res.status === 200){
        return component
    }
    if (res.status === 400) {
        return <Login />
    }
    
    return ''

}


// React.useEffect( () => { 
//     async function fetchData() {
//       try {
//         const res = await axios.get('http://localhost:4000/posts', {headers: {Authorization: 'Bearer '+localStorage.getItem("token")}}); 
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchData();
//   }, []);
// }
// export const useAuth = (component) => {  

//     if (localStorage.getItem("token")) {
//         return component
//     }
//     return <Login />


// }

export const useLoggedIn = (component) => {
    if (localStorage.getItem("token")) {
        return <Home />
    }
    return component
}


// export const useSessionID = (id) => {

//     useEffect(()=>{
//         const session = axios.get('/api/auth/get_session_id').json()
//         sessionStorage.setItem("session", session);
//         return true
//     }, [id])

// }
