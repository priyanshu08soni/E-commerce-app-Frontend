//curly brackets=same name importing
//without curly brackets=globly importing
import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from '../features/user/userSlice';
import productReducer from '../features/products/productSlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer,
  },
});
