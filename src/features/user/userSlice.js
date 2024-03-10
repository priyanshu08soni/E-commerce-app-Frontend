import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
export const getUserOrders=createAsyncThunk("user/get-orders",async(config2,thunkAPI)=>{
    try {
        return await authService.getUserOrders(config2);        
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
export const updateUser=createAsyncThunk("user/update",async(userData,thunkAPI)=>{
    try {
        return await authService.updateUser(userData);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const forgotPassToken=createAsyncThunk("user/forgot-password",async(data,thunkAPI)=>{
    try {
        return await authService.forgotPassToken(data);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const resetPass=createAsyncThunk("user/reset-password",async(data,thunkAPI)=>{
    try {
        return await authService.resetPass(data);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const emptyCart=createAsyncThunk("user/empty-cart",async(data,thunkAPI)=>{
    try {
        return await authService.emptyCart(data);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const resetState=createAction("Reset_all");
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
        .addCase(updateUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(updateUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.updatedUser=action.payload;
            if(state.isSuccess===true){
                let currentUserData=JSON.parse(localStorage.getItem("customer"));
                let newUserData={
                    _id:currentUserData?._id,
                    token:currentUserData?.token,
                    firstname:action?.payload?.firstname,
                    lastname:action?.payload?.lastname,
                    email:action?.payload?.email,
                    mobile:action?.payload?.mobile
                }
                console.log(newUserData);
                localStorage.setItem("customer",JSON.stringify(newUserData));
                state.user=newUserData;
                toast.success("User Updated Successfully")
            }
        })
        .addCase(updateUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload.response.data.message);
            }
        })
        .addCase(forgotPassToken.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(forgotPassToken.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.token=action.payload;
            if(state.isSuccess===true){
                toast.success("Email Send Successfully")
            }
        })
        .addCase(forgotPassToken.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload.response.data.message);
            }
        })
        .addCase(resetPass.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(resetPass.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.newPass=action.payload;
            if(state.isSuccess===true){
                toast.success("Password updated Successfully")
            }
        })
        .addCase(resetPass.rejected,(state,action)=>{
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
        .addCase(emptyCart.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(emptyCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.deletedCart=action.payload;
        })
        .addCase(emptyCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(getUserOrders.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getUserOrders.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.orders=action.payload;
        })
        .addCase(getUserOrders.rejected,(state,action)=>{
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
        .addCase(resetState,()=>initialState);
    }
})

export default authSlice.reducer;