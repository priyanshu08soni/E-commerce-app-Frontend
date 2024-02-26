//curly brackets=same name importing
//without curly brackets=globly importing
import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from '../features/user/userSlice';
import productReducer from '../features/products/productSlice'
import wishlistReducer from '../features/wishlist/wishlistSlice';
import blogReducer from '../features/blogs/blogSlice'
import contactReducer from '../features/contact/contactSlice';
export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer,
    wishlist:wishlistReducer,
    blog:blogReducer,
    contact:contactReducer
  },
});
