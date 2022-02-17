import axios from "axios";
import jwtDecode from "jwt-decode";
const apiURL = process.env.REACT_APP_API_URL;

export function login(data){
    return (
        axios.post(`${apiURL}/signup`, data)
    )
}

export function getCurrentUser(){
    try{
        const token = localStorage.getItem("token");
        return jwtDecode(token)
    }catch(error){
        return null;
    }
}