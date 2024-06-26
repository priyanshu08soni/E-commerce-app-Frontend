import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../features/user/userSlice";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { getAProduct, getProducts } from "../features/products/productSlice";
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const getTokenFromLocalStorage=localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer")):null;
  const config2={
    headers:{
      Authorization: `Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage.token:""}`
    },
    Accept:"application/json"
  };
  const [cartTotalPrice,setCartTotalPrice]=useState(0);
  const [productOpt,setProductOpt]=useState([]);
  const cartState=useSelector(state=>state?.auth?.cartProducts);
  const authState=useSelector(state=>state?.auth);
  const productState=useSelector(state=>state?.product?.product);
  useEffect(()=>{
    dispatch(getUserCart(config2));
  },[])
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum = sum + Number(cartState[i].quantity * cartState[i].price);
    }
    setCartTotalPrice(sum);
  }, [cartState]);
  
  const handleLogout=()=>{
    localStorage.clear();
    window.location.reload()
  }
  const [paginate,setPaginate]=useState(true);
  useEffect(()=>{
    dispatch(getProducts());
  },[]);
  useEffect(()=>{
    let data=[];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({id:index,prod:element?._id,name:element?.title});
    }
    setProductOpt(data);
  },[productState]);

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className=" text-white mb-0">
                Free shipping over 500 rupees & good products
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 8000643228">
                  +91 8000643228
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Developers.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={()=>console.log('Results paginated')}
                  labelKey={"name"}
                  options={productOpt}
                  minLength={2}
                  onChange={(selected)=>{
                    navigate(`/product/${selected[0]?.prod}`)
                    dispatch(getAProduct(selected[0]?.prod))
                  }}
                  paginate={paginate}
                  placeholder="Search for Products..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to={authState.user===null?"/login":"/my-profile"} className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    {
                      authState.user===null ? 
                      <p className="mb-0">
                        Log in <br />
                        My Account
                      </p>: 
                      <p className="mb-0">
                        {authState?.user?.firstname+authState?.user?.lastname}
                      </p>
                    }
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{cartState?.length?cartState.length:0}</span>
                      <p className="mb-0">$ {cartTotalPrice?cartTotalPrice:0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/product">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/my-orders">
                      My Orders
                    </NavLink>
                    <NavLink className="text-white" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Contact
                    </NavLink>
                    <button className="logout text-white" onClick={()=>{handleLogout()}}  >LOG-OUT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
