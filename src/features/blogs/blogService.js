import axios from "axios";
import {base_url} from "../../utils/base_url";
const config = {
    headers: {
      "Access-Control-Allow-Origin": "https://e-commerce-app-frontend-pink.vercel.app",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};
const getBlogs=async()=>{
    const response=await axios.get(`${base_url}blog/`,config);
    return response.data;
}
const getABlog=async(id)=>{
    const response=await axios.get(`${base_url}blog/${id}`,config);
    return response.data;
}
export const blogService={
    getBlogs,
    getABlog,
}