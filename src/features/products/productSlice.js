import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { productService } from "./productService";
export const getProducts=createAsyncThunk("product/get",async(data,thunkAPI)=>{
    try {
        return await productService.getProducts(data);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const getAProduct=createAsyncThunk("product/get-a-product",async(id,thunkAPI)=>{
    try {
        return await productService.getAProduct(id);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const rateProduct=createAsyncThunk("product/rating",async(data,thunkAPI)=>{
    try {
        return await productService.rateProduct(data);        
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
        .addCase(getAProduct.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getAProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.SingleProduct=action.payload;
            if(state.isSuccess===true){
                toast.info("Product fetched Successfully")
            }
        })
        .addCase(getAProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.error);
            }
        })
        .addCase(rateProduct.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(rateProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.rating=action.payload;
            if(state.isSuccess===true){
                toast.success("Review Send Successfully")
            }
        })
        .addCase(rateProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.error);
            }
        })
    }
})

export default productSlice.reducer;