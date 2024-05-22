import React, { useEffect } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { addToWish, getUserWishlist } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const navigate=useNavigate();
  const authState=useSelector(state=>state.auth);
  if(authState.user!==null && authState.isError===false){
    navigate("/login");
  }
  const getTokenFromLocalStorage=localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer")):null;
  const config2={
    headers:{
      Authorization: `Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage.token:""}`
    },
    Accept:"application/json"
  };

  const wlState= useSelector((state) => state?.auth?.wishlist?.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWishlist(config2));
  },[]);
  const removeFromWishlist=(prodId)=>{
    dispatch(addToWish({prodId:prodId,config2:config2}));
    dispatch(getUserWishlist(config2));
  }
 
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          { wlState &&  wlState?.map((item, index) => {
            return(
            <div className="col-3" key={index}>
              <div className="wishlist-card position-relative rounded-5" >
                <div className="wishlist-card-image bg-white">
                  <img
                    src={item?.images[0]?.url
                      ? item?.images[0]?.url
                      :"images/watch.jpg"}
                    className="img-fluid d-block mx-auto"
                    alt="watch"
                    width={160}
                  />
                </div>
                <div className="py-3 px-3 bg-white">
                <hr />
                  <h5 className="title">
                    {item.title.substr(0,90)+"..."}
                  </h5>
                  <h6 className="price">$ {item.price}</h6>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </Container>
    </>
  );
};

export default WishList;
