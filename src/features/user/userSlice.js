import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import authService from "./userService"
export const registerUser=createAsyncThunk("auth/register",async(userData,thunkAPI)=>{
    try {
        return await authService.register(userData);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const loginUser=createAsyncThunk("auth/login",async(userData,thunkAPI)=>{
    try {
        return await authService.login(userData);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const getUserWishlist=createAsyncThunk("user/wishlist",async(config2,thunkAPI)=>{
    try {
        return await authService.getUserWishlist(config2);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const addToCart=createAsyncThunk("user/add-to-cart",async(cartData,thunkAPI)=>{
    try {
        return await authService.addToCart(cartData);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const getUserCart=createAsyncThunk("user/get-cart",async(data,thunkAPI)=>{
    try {
        return await authService.getUserCart(data);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const deleteCartProduct=createAsyncThunk("user/cart/delete/product",async(data,thunkAPI)=>{
    try {
        return await authService.removeProductFromCart(data);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const updateProductQuantityFromCart=createAsyncThunk("user/cart/update/product",async(cartDetails,thunkAPI)=>{
    try {
        return await authService.updateProductQuantityFromCart(cartDetails);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const addToWish=createAsyncThunk("wishlist/add-to-wishlist",async(data,thunkAPI)=>{
    try {
        return await authService.addToWishlist(data);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const createOrder=createAsyncThunk("user/cart/create-order",async(orderDetail,thunkAPI)=>{
    try {
        return await authService.createOrder(orderDetail);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const getCustomerFromLocalStorage =localStorage.getItem("customer")?JSON.parse(localStorage.getItem("customer")):null;
const initialState={
    user:getCustomerFromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}
export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.createdUser=action.payload;
            if(state.isSuccess===true){
                toast.info("User Created Successfully")
            }
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload.response.data.message);
            }
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.user=action.payload;
            if(state.isSuccess===true){
                toast.info("Loggedin Successfully")
            }
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload.response.data.message);
            }
        })
        .addCase(getUserWishlist.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getUserWishlist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.wishlist=action.payload;
        })
        .addCase(getUserWishlist.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(addToCart.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.cart=action.payload;
            if(state.isSuccess){
                toast.success("Product Added To Cart")
            }
        })
        .addCase(addToCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(getUserCart.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getUserCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.cartProducts=action.payload;
        })
        .addCase(getUserCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(deleteCartProduct.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deleteCartProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.removedProduct=action.payload;
            if(state.isSuccess){
                toast.success("Product Removed Successfully")
            }
        })
        .addCase(deleteCartProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError){
                toast.error("Something went Wrong")
            }
        })
        .addCase(updateProductQuantityFromCart.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(updateProductQuantityFromCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.updatedProduct=action.payload;
            if(state.isSuccess){
                toast.success("Cart updated Successfully")
            }
        })
        .addCase(updateProductQuantityFromCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError){
                toast.error("Something went Wrong")
            }
        })
        .addCase(addToWish.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addToWish.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.wishlist=action.payload;
            if(state.isSuccess){
                toast.success("Added to wishlist Successfully")
            }
        })
        .addCase(addToWish.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError){
                toast.error("Something went Wrong")
            }
        })
        .addCase(createOrder.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createOrder.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.orderedProduct=action.payload;
            if(state.isSuccess){
                toast.success("Ordered Successfully")
            }
        })
        .addCase(createOrder.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError){
                toast.error("Something went Wrong")
            }
        })
    }
})

export default authSlice.reducer;