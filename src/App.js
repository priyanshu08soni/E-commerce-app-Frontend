import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    // make react fragments
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* By help of outlet we will using multiple routes in layout. */}
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='blogs' element={<Blog/>} />
          <Route path='blog/:id' element={<SingleBlog/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='product' element={<OurStore/>} />
          <Route path='product/:id' element={<SingleProduct/>} />
          <Route path='compare-product' element={<CompareProduct/>} />
          <Route path='wishlist' element={<WishList/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='reset-password' element={<ResetPassword/>} />
          <Route path='forgot-password' element={<ForgotPassword/>} />
          <Route path='term-conditions' element={<TermAndConditions/>} />
          <Route path='privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='shipping-policy' element={<ShippingPolicy/>} />
          <Route path='refund-policy' element={<RefundPolicy/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
