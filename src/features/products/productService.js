import axios from "axios";
import {base_url, config} from "../../utils/axiosConfig"

const getProducts =async()=>{
    const response=await axios.get(`${base_url}product`);
    return response.data;
}
const addToWishlist =async(prodId)=>{
    console.log(config);
    const response=await axios.put(`${base_url}product/wishlist`,{prodId},config);
    return response.data;
}

export const productService={
    getProducts,
    addToWishlist,
}