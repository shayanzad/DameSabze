import axios from "axios";
 const axiosInstance= axios.create({
     baseURL:"htpp://localhost:8080"
 })
 export {axiosInstance}