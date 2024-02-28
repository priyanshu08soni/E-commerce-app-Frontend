import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register=async(userData)=>{
    const response=await axios.post(`${base_url}user/register`,userData);
    if(response.data){
        localStorage.setItem("customer",JSON.stringify(response.data))
        return response.data;
    }
}
const login=async(userData)=>{
    const response=await axios.post(`${base_url}user/login`,userData);
    if(response.data){
        return response.data;
    }
}
const getUserWishlist=async()=>{
    const response=await axios.get(`${base_url}user/wishlist`,config);
    if(response.data){
        return response.data;
    }
}
const addToCart=async(cartData)=>{
    const response=await axios.post(`${base_url}user/cart`,cartData,config);
    if(response.data){
        return response.data;
    }
}
const getUserCart=async()=>{
    const response=await axios.get(`${base_url}user/cart`,config);
    if(response.data){
        return response.data;
    }
}
const removeProductFromCart=async(cartItemId)=>{
    const response=await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`,config);
    if(response.data){
        return response.data;
    }
}
const updateProductQuantityFromCart=async(cartDetails)=>{
    const response=await axios.delete(`${base_url}user/update-product-cart/${cartDetails.cartItemId}/${cartDetails.quantity}`,config);
    if(response.data){
        return response.data;
    }
}
const addToWishlist =async(prodId)=>{
    const response=await axios.put(`${base_url}product/wishlist`,{prodId},config);
    return response.data;
}
const authService={
    register,
    login,
    getUserWishlist,
    addToCart,
    getUserCart,
    removeProductFromCart,
    updateProductQuantityFromCart,
    addToWishlist
}

export default authService;