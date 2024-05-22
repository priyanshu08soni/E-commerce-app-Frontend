import axios from "axios";
import { base_url } from "../../utils/base_url";
const register=async(userData)=>{
    const response=await axios.post(`${base_url}user/register`,userData);
    if(response?.data){
        localStorage.setItem("customer",JSON.stringify(response?.data))
        return response?.data;
    }
}
const login=async(userData)=>{
    const response=await axios.post(`${base_url}user/login`,userData);
    if(response.data){
        localStorage.setItem('customer',JSON.stringify(response.data));
    }
    return response.data;
}
const getUserWishlist=async(config2)=>{
    const response=await axios.get(`${base_url}user/wishlist`,config2);
    if(response.data){
        return response.data;
    }
}
const addToCart=async(cartData)=>{
    const response=await axios.post(`${base_url}user/cart`,cartData.cartData,cartData.config2);
    if(response.data){
        return response.data;
    }
}
const getUserCart=async(data)=>{
    const response=await axios.get(`${base_url}user/cart`,data);
    if(response.data){
        return response.data;
    }
}
const getUserOrders=async(config2)=>{
    const response=await axios.get(`${base_url}user/getmyorders`,config2);
    if(response.data){
        return response.data;
    }
}
const removeProductFromCart=async(data)=>{
    const response=await axios.delete(`${base_url}user/delete-product-cart/${data.id}`,data.config2);
    if(response.data){
        return response.data;
    }
}
const updateProductQuantityFromCart=async(cartDetails)=>{
    const response=await axios.delete(`${base_url}user/update-product-cart/${cartDetails.cartItemId}/${cartDetails.quantity}`,cartDetails.config2);
    if(response.data){
        return response.data;
    }
}
const addToWishlist =async(data)=>{
    const response=await axios.put(`${base_url}product/wishlist`,{prodId:data.prodId},data.config2);
    return response.data;
}
const updateUser =async(data)=>{
    const response=await axios.put(`${base_url}user/edit-user`,data.userData,data.config2);
    if(response.data){
        return response.data;
    }
}
const forgotPassToken =async(tokenData)=>{
    const response=await axios.post(`${base_url}user/forgot-password-token`,tokenData);
    if(response){
        return response.data;
    }
}
const resetPass =async(data)=>{
    const response=await axios.put(`${base_url}user/reset-password/${data.token}`,data.password);
    if(response){
        return response.data;
    }
}
const emptyCart =async(config2)=>{
    const response=await axios.delete(`${base_url}user/empty-cart`,config2);
    if(response){
        return response.data;
    }
}

const createOrder=async(orderDetail)=>{
    const response=await axios.post(`${base_url}user/cart/create-order`,{
        totalPrice:orderDetail.totalPrice,
        totalPriceAfterDiscount:orderDetail.totalPriceAfterDiscount,
        orderItems:orderDetail.orderItems,
        paymentInfo:orderDetail.paymentInfo,
        shippingInfo:orderDetail.shippingInfo
    },orderDetail.config2);
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
    addToWishlist,
    createOrder,
    getUserOrders,
    updateUser,
    forgotPassToken,
    resetPass,
    emptyCart
}

export default authService;