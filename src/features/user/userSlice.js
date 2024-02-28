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
export const getUserWishlist=createAsyncThunk("user/wishlist",async(thunkAPI)=>{
    try {
        return await authService.getUserWishlist();        
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
export const getUserCart=createAsyncThunk("user/get-cart",async(thunkAPI)=>{
    try {
        return await authService.getUserCart();        
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
                toast.error(action.error);
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
                localStorage.setItem("token",action.payload.token)
                toast.info("Loggedin Successfully")
            }
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.error);
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
                toast.success("Product Added To Cart.")
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
            if(state.isSuccess){
                toast.success("Cart Feched Successfully")
            }
        })
        .addCase(getUserCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    }
})

export default authSlice.reducer;