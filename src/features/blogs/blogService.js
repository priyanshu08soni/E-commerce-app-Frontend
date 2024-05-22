import axios from "axios";
import {base_url} from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getBlogs=async()=>{
    const response=await axios.get(`${base_url}blog/`,config);
    return response.data;
}
const getABlog=async(id)=>{
    const response=await axios.get(`${base_url}blog/${id}`);
    return response.data;
}
export const blogService={
    getBlogs,
    getABlog,
}