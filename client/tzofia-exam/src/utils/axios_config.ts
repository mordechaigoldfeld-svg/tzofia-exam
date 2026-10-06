import axios from "axios";


export const instance = axios.create({
    baseURL:"http://localhost:3000/api",
    timeout:5000
})


export const instanceUser = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    timeout:5000
})