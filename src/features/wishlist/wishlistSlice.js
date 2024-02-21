
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { wishlistService } from "./wishlistSerivce";

export const addToWish=createAsyncThunk("wishlist/add-to-wishlist",async(prodId,thunkAPI)=>{
    try {
        return await wishlistService.addToWishlist(prodId);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
const initialState={
    wishlist:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}
export const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addToWish.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addToWish.fulfilled,(state,action)=>{
            state.isSuccess=true;  
            state.isLoading=false;
            state.isError=false;
            state.wishlist=action.payload;
        })
        .addCase(addToWish.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    }
})

export default wishlistSlice.reducer;