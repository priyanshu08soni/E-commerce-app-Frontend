import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { contactService } from "./contactService";

export const postQuery=createAsyncThunk("contact/post-query",async(contactData,thunkAPI)=>{
    try {
        return await contactService.postQuery(contactData);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})



const initialState={
    contact:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}
export const contactSlice=createSlice({
    name:"contact",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(postQuery.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(postQuery.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.contact=action.payload;
            if(state.isSuccess===true){
                toast.info("Contact form Submitted Successfully")
            }
        })
        .addCase(postQuery.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isSuccess===false && state.isError=== true){
                toast.success("Somthing went Wrong");
            }
        })
    }
})

export default contactSlice.reducer;