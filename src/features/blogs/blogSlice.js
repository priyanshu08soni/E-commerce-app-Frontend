import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import { blogService } from "./blogService";


export const getBlogs=createAsyncThunk("blog/get-blogs",async(thunkAPI)=>{
    try {
        return await blogService.getBlogs();
    } catch (error) {
        return thunkAPI.rejectWishValue(error);
    }
})
export const getABlog=createAsyncThunk("blog/get-a-blogs",async(id,thunkAPI)=>{
    try {
        return await blogService.getABlog(id);
    } catch (error) {
        return thunkAPI.rejectWishValue(error);
    }
})
const initialState={
    blog:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}
export const blogSlice=createSlice({
    name:"blog",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBlogs.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getBlogs.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.blog=action.payload;
        })
        .addCase(getBlogs.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(getABlog.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getABlog.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.singleBlog=action.payload;
        })
        .addCase(getABlog.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    }
})

export default blogSlice.reducer;