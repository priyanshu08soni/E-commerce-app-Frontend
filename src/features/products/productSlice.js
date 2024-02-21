import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { productService } from "./productService";
export const getProducts=createAsyncThunk("product/get",async(thunkAPI)=>{
    try {
        return await productService.getProducts();        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const addToWish=createAsyncThunk("product/add-to-wishlist",async(prodId,thunkAPI)=>{
    try {
        return await productService.addToWishlist(prodId);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


const initialState={
    product:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}
export const productSlice=createSlice({
    name:"product",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.product=action.payload;
            if(state.isSuccess===true){
                toast.info("Products fetched Successfully")
            }
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.error);
            }
        })
        .addCase(addToWish.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addToWish.fulfilled,(state,action)=>{
            state.isSuccess=true;  
            state.isLoading=false;
            state.isError=false;
            state.addToWishlist=action.payload;
        })
        .addCase(addToWish.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    }
})

export default productSlice.reducer;